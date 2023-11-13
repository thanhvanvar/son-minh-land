import React, { useEffect, useState, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
const { convert } = require("html-to-text");
import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import queryString from "query-string";
import MenuSidebar from "../../MenuSidebar";
import * as Icon from "react-bootstrap-icons";
import { Input, Image, Tabs, Tab, Textarea } from "@nextui-org/react";
import {
  toastError,
  toastSuccess,
  themeSelect,
  toastInfo,
  updatetData,
  insertData,
  convertKeyword,
} from "../../../../lib/FtGeneral";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { supabase } from "../../../../lib/supabaseClient";
import Login from "../../user/Login";
import Header from "../Header";
const { v4: uuidv4 } = require("uuid");
import EditorTiny from "../editor/EditorTiny";

export default function NewsDetailAdmin() {
  const session = useSession();
  const router = useRouter();
  const inputFile = useRef<HTMLInputElement | null>(null);
  const currentDate = new Date();
  const [ImgNameSlide, setImgNameSlide] = useState([]);
  const [imgSlide, setImgSlide] = useState([]);

  const [name, setName] = useState("");
  const [diachi, setDiaChi] = useState("");
  const [info, setInfo] = useState("");
  const [img, setImg] = useState("/no-image.png");
  const [tongquan, setTongQuan] = useState("");
  const [date_added, setDateAdd] = useState("");
  const [date_modified, setDateMOdified] = useState("");

  useEffect(() => {
    if (router.query.postId) {
      const query = {
        id: router.query.postId,
      };
      const urlAPI = `/api/news/newsDetail?${queryString.stringify(query)}`;
      fetch(urlAPI)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setName(data.title);
          setInfo(data.description);
          setImg(data.image_url);
          setTongQuan(data.content);
          setDateAdd(data.date_added);
          setDateMOdified(data.date_modified);
        });
    }
  }, [router]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(name);
    if (name == "") {
      toastError("Vui lòng điền tên dự án...");
      return false;
    }
    if (info == "") {
      toastError("Vui lòng điền giới thiệu...");
      return false;
    }

    const ojb: any = {
      id: router.query.postId == "0" ? uuidv4() : router.query.postId,
      title: name,
      keywords: convertKeyword(name),
      category: "",
      description: info,
      link: "",
      image_url: img,
      content: tongquan,
      active: "1",
      deleted: "0",
      creator: "",
      date_added: currentDate,
      date_modified: currentDate,
    };
    if (router.query.postId != "0") {
      console.log(ojb);
      delete ojb.date_added;
      // updatetDataTinRao(ojb);
      updatetData("press", ojb);
      // router.push(`/admin/${router.query.contentId}`, undefined, { shallow: true });
    } else {
      console.log(ojb);
      delete ojb.date_modified;
      // insertDataTinRao(ojb);
      insertData("press", ojb);
      router.push(`/admin/${router.query.contentId}`, undefined, {
        shallow: true,
      });
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
        <form id="myForm" onSubmit={handleSubmit} encType="multipart/form-data">
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
                          placeholder="Tên bài viết..."
                          labelPlacement={"outside"}
                        />
                      </div>

                      <div className={`col-span-12`}>
                        <Textarea
                          label="Giới thiệu ngắn"
                          placeholder="Giới thiệu ngắn..."
                          value={info}
                          labelPlacement="outside"
                          onChange={(e) => setInfo(e.target.value)}
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
                            className="object-cover w-40 h-40 mt-5 text-large cursor-pointer"
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
                        <p className="font-bold text-base py-5">Nội dung</p>
                        <EditorTiny
                          value={tongquan}
                          onEditorChange={(e: any) => setTongQuan(e)}
                        />
                      </div>
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
