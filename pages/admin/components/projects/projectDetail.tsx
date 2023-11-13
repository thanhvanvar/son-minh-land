import React, { useEffect, useState, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
const { convert } = require("html-to-text");
import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import queryString from "query-string";
import MenuSidebar from "../../MenuSidebar";
import * as Icon from "react-bootstrap-icons";
import {
  Input,
  Image,
  Button,
  Tabs,
  Tab,
  Card,
  Avatar,
} from "@nextui-org/react";
import {
  toastError,
  toastSuccess,
  themeSelect,
  toastInfo,
} from "../../../../lib/FtGeneral";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { supabase } from "../../../../lib/supabaseClient";
import Login from "../../user/Login";
import Header from "../Header";
const { v4: uuidv4 } = require("uuid");
import EditorTiny from "../editor/EditorTiny";

export default function ProjectDetailAdmin() {
  const session = useSession();
  const router = useRouter();
  const inputFile = useRef<HTMLInputElement | null>(null);
  const currentDate = new Date();

  const [ImgNameSlide, setImgNameSlide] = useState([]);
  const [imgSlide, setImgSlide] = useState([]);

  const [project, setProject]: any = useState([]);
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [diachi, setDiaChi] = useState("");
  const [info, setInfo] = useState("");
  const [img, setImg] = useState("/no-image.png");
  const [tongquan, setTongQuan] = useState("");
  const [vitri, setViTri] = useState("");
  const [tienich, setTienIch] = useState("");
  const [matbang, setMatBang] = useState("");
  const [tiendo, setTienDo] = useState("");
  const [pttt, setPTTT] = useState("");
  const [active, setActive] = useState("");
  const [deleted, setDeleted] = useState("");

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
          setImg(data.img);
          setTongQuan(data.tongquan_vn);
          setViTri(data.vitri_vn);
          setTienIch(data.tienich_vn);
          setMatBang(data.matbang_vn);
          setTienDo(data.tiendo_vn);
          setPTTT(data.pttt_vn);
          setActive(data.active);
          setDeleted(data.deleted);
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
    console.log(event.target.name);
    if (name == "") {
      toastError("Vui lòng điền tên dự án...");
      return false;
    }
    if (diachi == "") {
      toastError("Vui lòng điền tên dự án...");
      return false;
    }

    const ojb: any = {
      id: router.query.postId == null ? uuidv4() : router.query.postId,
      name_vn: name,
      diachi_vn: diachi,
      info_vn: info,
      img: img,
      tongquan_vn: tongquan,
      vitri_vn: vitri,
      tienich_vn: tienich,
      matbang_vn: matbang,
      tiendo_vn: tiendo,
      pttt_vn: pttt,
      date_added: currentDate,
      date_modified: currentDate,
      active: active ? active : "1",
      deleted: deleted ? deleted : "0",
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

  async function uploadImage(e: any) {
    console.log(e);
    let file = e.target.files;
    for (let i = 0; i < file.length; i++) {
      let checkFile = true;
      if (e.target.files[i].size > 5000 * 1024) {
        toastError(`Hình ${e.target.files[i].name} không được quá 5 MB`);
        checkFile = false;
      }
      if (
        !["jpeg", "png", "jpg", "gif"].includes(
          e.target.files[i].type.split("/").pop()
        )
      ) {
        toastError(
          `Hình ${e.target.files[i].name} không đúng định dạng, định dạng đúng 'jpeg','png','jpg','gif' `
        );
        checkFile = false;
      }
      if (checkFile) {
        let file2 = e.target.files[i];
        console.log(file2);
        const { data, error } = await supabase.storage
          .from("project_image/avatar")
          .upload(uuidv4(), file2);
        if (data) {
          // setImgSlide(oldMessages => [data.path, ...oldMessages])
          console.log(data);
          setImg(
            `https://vyjeeoqetducftdoemqr.supabase.co/storage/v1/object/public/project_image/avatar/${data.path}`
          );
        } else {
          console.log(error);
        }
      }
    }
  }
  const handleClickImg = () => {
    // `current` points to the mounted file input element
    if (inputFile.current) {
      // will be type HTMLDivElement NOT HTMLDivElement | null
      inputFile.current.click();
    }
  };

  return (
    <>
      {!session ? (
        <Login />
      ) : (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Header />
          <div className="grid grid-cols-12 gap-5">
            <div className={`col-span-12`}>
              <div className="flex w-full flex-col">
                <Tabs aria-label="Options">
                  <Tab key="thong-tin-chung" title="Thông tin chung">
                    <div className="grid grid-cols-12 gap-5">
                      <div className={`col-span-12`}>
                        <Input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          variant={"flat"}
                          label="Tên"
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
                          label="Địa chỉ"
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
                        <div className={`flex flex-wrap relative`}>
                          {/* <Avatar
                                  src={img}
                                  className="w-40 h-40 text-large"
                                  onClick={handleClickImg}
                                /> */}
                          <Image
                            width={240}
                            src={img}
                            alt="NextUI Album Cover"
                            onClick={handleClickImg}
                            className=" object-cover w-40 h-40 mt-5 text-large cursor-pointer"
                          />
                          {img != "/no-image.png" ? (
                            <p
                              className={`absolute bottom-6 left-6 z-10 cursor-pointer`}
                              onClick={() => setImg("/no-image.png")}
                            >
                              <Icon.XCircleFill
                                className={`text-2xl text-green-400 pointer-events-none`}
                              />
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                        <input
                          type="file"
                          name="myImage"
                          ref={inputFile}
                          onChange={(e) => uploadImage(e)}
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </Tab>
                  <Tab key="tong-quan" title="Tổng quan">
                    <div className="grid grid-cols-12 gap-5">
                      <div className={`col-span-12`}>
                        <p className="font-bold text-base py-5">Tổng quan</p>
                        <EditorTiny
                          value={tongquan}
                          onEditorChange={(e: any) => setTongQuan(e)}
                        />
                      </div>
                    </div>
                  </Tab>
                  <Tab key="vi-tri" title="Vị trí">
                    <div className={`col-span-12`}>
                      <p className="font-bold text-base py-5">Vị trí</p>

                      <EditorTiny
                        value={vitri}
                        // onChange={(e: any) => setViTri(e)}
                        onEditorChange={(e: any) => setViTri(e)}
                      />
                    </div>
                  </Tab>
                  <Tab key="tien-ich" title="Tiện ích">
                    <div className={`col-span-12`}>
                      <p className="font-bold text-base py-5">Tiện ích</p>

                      <EditorTiny
                        value={tienich}
                        onEditorChange={(e: any) => setTienIch(e)}
                      />
                    </div>
                  </Tab>
                  <Tab key="mat-bang" title="Mặt bằng">
                    <div className={`col-span-12`}>
                      <p className="font-bold text-base py-5">Mặt bằng</p>

                      <EditorTiny
                        value={matbang}
                        onEditorChange={(e: any) => setMatBang(e)}
                      />
                    </div>
                  </Tab>
                  <Tab key="tien-do" title="Tiến độ">
                    <div className={`col-span-12`}>
                      <p className="font-bold text-base py-5">Tiến độ</p>
                      <EditorTiny
                        value={tiendo}
                        onEditorChange={(e: any) => setTienDo(e)}
                      />
                    </div>
                  </Tab>
                  <Tab key="pttt" title="PTTT">
                    <div className={`col-span-12`}>
                      <p className="font-bold text-base py-5">
                        Phương thức thanh toán
                      </p>
                      <EditorTiny
                        value={pttt}
                        onEditorChange={(e: any) => setPTTT(e)}
                      />
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </form>
      )}
      <ToastContainer />
    </>
  );
}
