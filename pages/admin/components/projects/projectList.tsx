import React, { useEffect, useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import queryString from "query-string";
import * as Icon from "react-bootstrap-icons";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Switch,
} from "@nextui-org/react";

export default function ProjectList() {
  const router = useRouter();
  console.log(router.query);
  let searchParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );

  const [page, setPage] = useState(
    searchParams.get("pa") ? searchParams.get("pa") : "1"
  );
  const limit = "10";
  // @ts-ignore
  const offset = (page - 1) * limit;
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    const query = {
      offset: offset,
    };
    const urlAPI = `/api/admin/projectAdmin/projectlist?${queryString.stringify(
      query
    )}`;
    fetch(urlAPI)
      .then((res) => res.json())
      .then((data) => {
        setProjectList(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          {projectList.map((row: any, index) => (
            <TableRow key={index} className="">
              <TableCell>{row.name_vn}</TableCell>
              <TableCell>
                <Switch
                  defaultSelected={row.active == "1" ? true : false}
                  size="sm"
                >
                  {row.active == "1" ? "Hiện" : "Ẩn"}
                </Switch>
              </TableCell>
              <TableCell>
                <div className="relative flex items-center gap-3">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <Icon.EyeFill size={23} />
                  </span>

                  <span
                    className="text-lg text-default-400 cursor-pointer active:opacity-50"
                    onClick={() =>
                      router.push(`/admin/project/edit/${row.id}`, undefined, {
                        shallow: true,
                      })
                    }
                  >
                    <Icon.PencilSquare size={23} />
                  </span>

                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <Icon.Trash3Fill size={23} />
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
