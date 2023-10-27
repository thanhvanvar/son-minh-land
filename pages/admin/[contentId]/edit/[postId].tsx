import React, { useEffect, useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import queryString from "query-string";
import MenuSidebar from "../../MenuSidebar";
import {
  Input,
  Image,
  Button,
  Tabs,
  Tab,
  Card,
  CardBody,
} from "@nextui-org/react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });
import {
  toastError,
  toastSuccess,
  themeSelect,
  toastInfo,
} from "../../../../lib/FtGeneral";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { supabase } from "../../../../lib/supabaseClient";
import Login from "../../user/Login";
import Header from "../../components/Header";
const { v4: uuidv4 } = require("uuid");


export default function About() {
  const session = useSession();
  const router = useRouter();

  const [project, setProject]: any = useState([]);
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [diachi, setDiaChi] = useState("");
  const [info, setInfo] = useState("");
  const [tongquan, setTongQuan] = useState("");
  const [vitri, setViTri] = useState("");
  const [tienich, setTienIch] = useState("");
  const [tiendo, setTienDo] = useState("");
  const [pttt, setPTTT] = useState("");

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChangeTongQuan = (e: any) => {
    console.log(tongquan);
    setTongQuan(e);
  };
  const handleEditorChangeViTri = (e: any) => {
    console.log(tongquan);
    setTongQuan(e);
  };
  const handleEditorChangeTienIch = (e: any) => {
    console.log(tongquan);
    setTongQuan(e);
  };
  const handleEditorChangeTienDo = (e: any) => {
    console.log(tongquan);
    setTongQuan(e);
  };
  const handleEditorChangePTTT = (e: any) => {
    console.log(tongquan);
    setTongQuan(e);
  };

  useEffect(() => {
    if (router.query.postId) {
      const query = {
        id: router.query.postId,
      };
      const urlAPI = `/api/projects/projectDetail?${queryString.stringify(
        query
      )}`;
      fetch(urlAPI)
        .then((res) => res.json())
        .then((data) => {
          setProject(data);
          setName(data.name_vn);
          setDiaChi(data.diachi_vn);
          setInfo(data.info_vn);
          setTongQuan(data.tongquan_vn);
          console.log(data);
        });
    }
  }, [router.query.postId]);

  async function insertDataTinRao(ojb: any) {
    const { data, error } = await supabase.from("projects").insert(ojb);
    if (error) {
      console.log("Error:", error.message);
    } else {
      toastSuccess("Đăng tin thành công");
      router.push("/cms/tin-da-dang", undefined, { shallow: true });
    }
  }

  async function updatetDataTinRao(ojb: any) {
    console.log(ojb.id);
    const { data, error } = await supabase
      .from("projects")
      .update(ojb)
      .eq("id", String(ojb.id));
    if (error) {
      console.log("Error:", error.message);
    } else {
      console.log(data);
      toastSuccess("Sửa tin thành công");
    }
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
console.log(event.target.name)
    if (name == '') {
      toastError("Vui lòng điền tên dự án...");
      return false;
    }
    if (diachi == '') {
      toastError("Vui lòng điền tên dự án...");
      return false;
    }

    const ojb: any = {
      id: router.query.postId == null ? uuidv4() : router.query.postId,
      name_vn: name,
      diachi_vn: diachi,
      info_vn: info,
      tongquan_vn: tongquan,
    };
    if (router.query.postId != "0") {
      console.log(ojb);
      delete ojb.date_added;
      updatetDataTinRao(ojb);
      //   router.push(`/cms/tin-da-dang`, undefined, { shallow: true });
    } else {
      console.log(ojb);
      delete ojb.date_modified;
      insertDataTinRao(ojb);
      router.push(`/cms/tin-da-dang`, undefined, { shallow: true });
    }
  };

  return (
    <>
      {!session ? (
        <Login />
      ) : (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
            <div className="grid grid-cols-12 gap-8">
              <div className={`col-span-3`}>
                <MenuSidebar />
              </div>
              <div className={`col-span-9`}>
                <Header />
                <div className="grid grid-cols-12 gap-5">
                  <div className={`col-span-12`}>
                    <div className="flex w-full flex-col">
                      <Tabs aria-label="Options">
                        <Tab key="tong-quan" title="Tổng quan">
                          <div className="grid grid-cols-12 gap-5">
                            <div className={`col-span-12`}>
                              <Input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                variant={"flat"}
                                label="Name"
                                name="name"
                                placeholder="tên dự án..."
                                labelPlacement={"outside"}
                              />
                            </div>
                            <div className={`col-span-12`}>
                              <Input
                                value={diachi}
                                onChange={(e) => setDiaChi(e.target.value)}
                                type="text"
                                variant={"flat"}
                                name="address"
                                label="Address"
                                placeholder="địa chỉ dự án..."
                                labelPlacement={"outside"}
                              />
                            </div>
                            <div className={`col-span-12`}>
                              <Input
                                value={info}
                                onChange={(e) => setInfo(e.target.value)}
                                type="text"
                                variant={"flat"}
                                name="info"
                                label="Giới thiệu ngắn"
                                placeholder="giới thiệu..."
                                labelPlacement={"outside"}
                              />
                            </div>
                            <div className={`col-span-12`}>
                              <p className="font-bold text-sm">Hình đại diện</p>
                              <Image
                                isBlurred
                                width={240}
                                src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                                alt="NextUI Album Cover"
                                className="m-5"
                              />
                            </div>
                            <div className={`col-span-12`}>
                              <p className="font-bold text-sm">Tổng quan</p>
                              <QuillEditor
                                value={tongquan}
                                onChange={(e) => setTongQuan(e)}
                                modules={quillModules}
                                formats={quillFormats}
                                className="h-[500px] bg-white"
                              />
                            </div>
                          </div>
                        </Tab>
                        <Tab key="vi-tri" title="Vị trí">
                          <div className={`col-span-12`}>
                            <p className="font-bold text-sm pt-10">Vị trí</p>

                            <QuillEditor
                              value={vitri}
                              onChange={(e) => setViTri(e)}
                              modules={quillModules}
                              formats={quillFormats}
                              className="h-[500px] bg-white"
                            />
                          </div>
                        </Tab>
                        <Tab key="tien-ich" title="Tiện ích">
                          <div className={`col-span-12`}>
                            <p className="font-bold text-sm pt-10">Tiện ích</p>

                            <QuillEditor
                              value={tienich}
                              onChange={(e) => setTienIch(e)}
                              modules={quillModules}
                              formats={quillFormats}
                              className="h-[500px]  bg-white"
                            />
                          </div>
                        </Tab>
                        <Tab key="tien-do" title="Tiến độ">
                          <div className={`col-span-12`}>
                            <p className="font-bold text-sm pt-10">Tiến độ</p>
                            <QuillEditor
                              value={tiendo}
                              onChange={(e) => setTienDo(e)}
                              modules={quillModules}
                              formats={quillFormats}
                              className="h-[500px] bg-white"
                            />
                          </div>
                        </Tab>
                        <Tab key="pttt" title="PTTT">
                          <div className={`col-span-12`}>
                            <p className="font-bold text-sm pt-10">
                              Phương thức thanh toán
                            </p>
                            <QuillEditor
                              value={pttt}
                              onChange={(e) => setPTTT(e)}
                              modules={quillModules}
                              formats={quillFormats}
                              className="bg-white"
                            />
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
       <ToastContainer/>
    </>
  );
}
