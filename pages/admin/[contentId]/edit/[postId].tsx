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
import Header from "../../components/Header";
const { v4: uuidv4 } = require("uuid");
import EditorTiny from "../../components/editor/EditorTiny";
import ProjectDetailAdmin from "../../components/projects/projectDetail";
import NewsDetailAdmin from "../../components/news/newsDetail";

export default function ProjectDetail() {
  const session = useSession();
  const router = useRouter();
  const inputFile = useRef<HTMLInputElement | null>(null);

  const [ImgNameSlide, setImgNameSlide] = useState([]);
  const [imgSlide, setImgSlide] = useState([]);

  const [project, setProject]: any = useState([]);
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [diachi, setDiaChi] = useState("");
  const [info, setInfo] = useState("");
  const [img, setImg] = useState("");
  const [tongquan, setTongQuan] = useState("");
  const [vitri, setViTri] = useState("");
  const [tienich, setTienIch] = useState("");
  const [matbang, setMatBang] = useState("");
  const [tiendo, setTienDo] = useState("");
  const [pttt, setPTTT] = useState("");

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
      active: "1",
      deleted: "0",
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
        <>
          {router.query.contentId == "project" ? (
            <ProjectDetailAdmin />
          ) : (
            ""
          )}
          {router.query.contentId == "news" ? (
            <NewsDetailAdmin />
          ) : (
            ""
          )}
        </>
      )}
      <ToastContainer />
    </>
  );
}
