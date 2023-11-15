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
  Image,
  Divider,
  Avatar
} from "@nextui-org/react";
import { supabase } from "../../../../lib/supabaseClient";
import { toastError, toastSuccess } from "../../../../lib/FtGeneral";
import { handleDeletedData } from "../../../../lib/FtProgress";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Moment from "react-moment";
import PaginationAdmin from "../PaginationAdmin";
import NextTableLoading from "@/components/Loading/NextTableLoading";

export default function ProjectList() {
  const router = useRouter();
  const tableBase = "projects";
  const urlAPI_list = "/api/admin/project_admin/projectlist";
  const urlAPI_list_total = "/api/admin/project_admin/project_total_list";
  const [loading, setLoading] = useState(true);
  const [changeData, setChangeData] = useState(false);
  const [infoList, setInfoList] = useState([]);
  const [totalList, setTotalList] = useState("0");

  useEffect(() => {
    const query = {
      deleted: router.query.del == "1" ? "1" : "0",
    };
    const urlAPI = `${urlAPI_list_total}?${queryString.stringify(query)}`;
    fetch(urlAPI)
      .then((res) => res.json())
      .then((data) => {
        setTotalList(data.length);
      });
  }, [router.asPath]);

  useEffect(() => {
    setLoading(true);
    const query = {
      deleted: router.query.del == "1" ? "1" : "0",
      page: router.query.pa != null ? router.query.pa : "1",
      limit: "10",
    };
    const urlAPI = `${urlAPI_list}?${queryString.stringify(query)}`;
    fetch(urlAPI)
      .then((res) => res.json())
      .then((data) => {
        setInfoList(data);
        console.log("project");
        setLoading(false);
      });
  }, [router.asPath, changeData]);

  const handleSwitch = async (info: any) => {
    const query = {
      id: info.id,
      active: info.active == "1" ? "0" : "1",
    };
    const { data, error } = await supabase
      .from(tableBase)
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

  const handleDeleted = (info: any) => {
    const query = {
      id: info.id,
      deleted: "1",
    };
    const filterParams = {
      tableBase: tableBase,
      obj: query,
    };
    fetch("/api/admin/updateDataDelete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filterParams }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          toastError("Xóa tin thất bại");
        } else {
          setChangeData(!changeData);
          toastSuccess("Xóa tin thành công");
        }
      });
  };
  const handleRestore = async (info: any) => {
    const query = {
      id: info.id,
      deleted: "0",
    };
    const filterParams = {
      tableBase: tableBase,
      obj: query,
    };
    fetch("/api/admin/updateDataDelete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filterParams }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          toastError("Khôi phục tin thất bại");
        } else {
          setChangeData(!changeData);
          toastSuccess("Khôi phục tin thành công");
        }
      });
  };
  if (loading) {
    return <NextTableLoading />;
  }
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
          {infoList.map((row: any, index) => (
            <TableRow key={index} className="border-b-1 border-dashed ">
              <TableCell>
                <div className="flex justify-start gap-5 items-center">
                  <div className="align-items">
                  <Avatar src={row.img} radius="sm" className="w-12 h-12 text-large" />
                    {/* <Image
                      width={80}
                      src={row.img}
                      alt="NextUI Album Cover"
                      className="object-cover w-10 h-10 text-large cursor-pointer"
                    /> */}
                  </div>
                  <div>
                    <span className="line-clamp-1">{row.name_vn}</span>
                  </div>
                </div>
              </TableCell>
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
                  {router.query.del=='1' ? (
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
      <PaginationAdmin totalData={totalList} />
      <ToastContainer />
    </>
  );
}
