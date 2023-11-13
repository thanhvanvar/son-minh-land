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
} from "@nextui-org/react";
import { supabase } from "../../../../lib/supabaseClient";
import { toastError, toastSuccess } from "../../../../lib/FtGeneral";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Moment from "react-moment";
import Pagination from "../PaginationAdmin";
import NextTableLoading from "@/components/Loading/NextTableLoading";

export default function NewstList() {
  const router = useRouter();
  const tableBase = "press";
  const urlAPI_list = "/api/admin/press_admin/presslist";
  const urlAPI_list_total = "/api/admin/press_admin/press_total_list";
  const [loading, setLoading] = useState(true);
  const [changeData, setChangeData] = useState(false);
  const [infoList, setInfoList] = useState([]);
  const [totalList, setTotalList] = useState("0");
  useEffect(() => {
    const query = {
      deleted: router.pathname == "/admin/[contentId]/deleted" ? "1" : "0",
    };
    const urlAPI = `${urlAPI_list_total}?${queryString.stringify(query)}`;
    fetch(urlAPI)
      .then((res) => res.json())
      .then((data) => {
        setTotalList(data.length);
      });
  }, []);
  useEffect(() => {
    setLoading(true);
    const query = {
      deleted: router.asPath == "/admin/news/deleted" ? "1" : "0",
      page: router.query.pa != null ? router.query.pa : "1",
      limit: "10",
    };
    const urlAPI = `${urlAPI_list}?${queryString.stringify(query)}`;
    fetch(urlAPI)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfoList(data);
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
  const handleDeleted = async (info: any) => {
    const query = {
      id: info.id,
      deleted: "1",
    };
    const { data, error } = await supabase
      .from(tableBase)
      .update(query)
      .eq("id", String(query.id));
    if (error) {
      console.log("Error:", error.message);
      toastError("Xóa tin thất bại");
    } else {
      console.log(data);
      setChangeData(!changeData);
      toastSuccess("Xóa tin thành công");
    }
  };
  const handleRestore = async (info: any) => {
    const query = {
      id: info.id,
      deleted: "0",
    };
    const { data, error } = await supabase
      .from(tableBase)
      .update(query)
      .eq("id", String(query.id));
    if (error) {
      console.log("Error:", error.message);
      toastError("Khôi phục tin thất bại");
    } else {
      console.log(data);
      setChangeData(!changeData);
      toastSuccess("Khôi phục tin thành công");
    }
  };
  if (loading) {
    return <NextTableLoading />;
  }
  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>#</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>Ngày đăng</TableColumn>
          <TableColumn>Ẩn/Hiện</TableColumn>
          <TableColumn>ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          {infoList.map((row: any, index) => (
            <TableRow key={row.id} className="border-b-1 border-dashed ">
              <TableCell>
                <Image
                  width={80}
                  src={row.image_url}
                  alt={row.keywords}
                  className="object-cover w-[80px] h-[40px] cursor-pointer"
                />
              </TableCell>
              <TableCell>
                <span className="line-clamp-2">{row.title}</span>
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
                        window.open(
                          `/tin-tuc/${row.keywords}/${row.id}`,
                          "_blank"
                        )
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
                      router.push(`/admin/news/edit/${row.id}`, undefined, {
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

      <Pagination totalData={totalList} />
      <ToastContainer />
    </>
  );
}
