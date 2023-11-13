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
import Layout from "../../Layout";

export default function ProjectDetail() {
  const session = useSession();
  const router = useRouter();

  const isProjectContent = router.query.contentId === "project";
  const isNewsContent = router.query.contentId === "news";
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
        .then((data) => {});
    }
  }, [router.query.postId]);

  return (
    <>
      {!session ? (
        <Login />
      ) : (
        <>
          <Layout>
            {isProjectContent && <ProjectDetailAdmin />}
            {isNewsContent && <NewsDetailAdmin />}
          </Layout>
        </>
      )}
      <ToastContainer />
    </>
  );
}
