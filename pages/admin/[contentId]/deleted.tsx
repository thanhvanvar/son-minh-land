import React, { useEffect, useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import queryString from "query-string";
import MenuSidebar from "../MenuSidebar";
import * as Icon from "react-bootstrap-icons";
import { Input } from "@nextui-org/react";
import Login from "../user/Login";
import Header from "../components/Header";
import ProjectList from "../components/projects/projectList";
import NewstList from "../components/news/newsList";
import Layout from "../Layout";

export default function Home() {
  const router = useRouter();
  const session = useSession();

  return (
    <>
      {!session ? (
        <Login />
      ) : (
        <Layout>
          <Header />
          {router.query.contentId == "project" ? <ProjectList /> : ""}
          {router.query.contentId == "news" ? <NewstList /> : ""}
        </Layout>
      )}
    </>
  );
}
