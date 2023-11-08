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
import { supabase } from "../../../../lib/supabaseClient";
import { toastError, toastSuccess } from "../../../../lib/FtGeneral";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Moment from "react-moment";

export default function ProjectList() {
  const router = useRouter();
  console.log(router);
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
      deleted: router.asPath == "/admin/project/deleted" ? "1" : "0",
      offset: offset,
    };
    const urlAPI = `/api/admin/project_admin/projectlist?${queryString.stringify(
      query
    )}`;
    fetch(urlAPI)
      .then((res) => res.json())
      .then((data) => {
        setProjectList(data);
        console.log(data);
      });
  }, [router]);
  const handleSwitch = async (info: any) => {
    const query = {
      id: info.id,
      active: info.active == "1" ? "0" : "1",
    };
    const { data, error } = await supabase
      .from("projects")
      .update(query)
      .eq("id", String(query.id));
    if (error) {
      console.log("Error:", error.message);
      toastError("Sửa tin thất bại");
    } else {
      console.log(data);
      toastSuccess("Sửa tin thành công");
    }
  };
  const handleDeleted = async (info: any) => {
    const query = {
      id: info.id,
      deleted: "1",
    };
    const { data, error } = await supabase
      .from("projects")
      .update(query)
      .eq("id", String(query.id));
    if (error) {
      console.log("Error:", error.message);
      toastError("Xóa tin thất bại");
    } else {
      console.log(data);
      toastSuccess("Xóa tin thành công");
    }
  };
  const handleRestore = async (info: any) => {
    const query = {
      id: info.id,
      deleted: "0",
    };
    const { data, error } = await supabase
      .from("projects")
      .update(query)
      .eq("id", String(query.id));
    if (error) {
      console.log("Error:", error.message);
      toastError("Khôi phục tin thất bại");
    } else {
      console.log(data);
      toastSuccess("Khôi phục tin thành công");
    }
  };
  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>Ngày đăng</TableColumn>
          <TableColumn>Ẩn/Hiện</TableColumn>
          <TableColumn>ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          {projectList.map((row: any, index) => (
            <TableRow key={index} className="">
              <TableCell>{row.name_vn}</TableCell>
              <TableCell>
                <Moment format="DD/MM/YYYY">{row.date_added}</Moment>
              </TableCell>
              <TableCell>
                <Switch
                  defaultSelected={row.active == "1" ? true : false}
                  size="sm"
                  onChange={(e) => handleSwitch(row)}
                >
                  {/* {row.active == "1" ? "Hiện" : "Ẩn"} */}
                </Switch>
              </TableCell>
              <TableCell>
                <div className="relative flex items-center gap-3">
                  <span
                    className="text-lg text-default-400 cursor-pointer active:opacity-50"
                    onClick={
                      () =>
                        window.open(`/du-an/${row.keyword}/${row.id}`, "_blank")
                      // router.push(`/du-an/${row.keyword}/${row.id}`, undefined, {
                      //   shallow: true
                      // })
                    }
                  >
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
                  {router.pathname == "/admin/[contentId]/deleted" ? (
                    <span
                      className="text-lg text-danger cursor-pointer active:opacity-50"
                      onClick={(e) => handleRestore(row)}
                    >
                      <Icon.ArrowClockwise size={23} />
                    </span>
                  ) : (
                    <span
                      className="text-lg text-danger cursor-pointer active:opacity-50"
                      onClick={(e) => handleDeleted(row)}
                    >
                      <Icon.Trash3Fill size={23} />
                    </span>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ToastContainer />
    </>
  );
}
