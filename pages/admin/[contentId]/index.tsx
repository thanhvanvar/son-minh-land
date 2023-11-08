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

export default function Home() {
  const router = useRouter();
  const session = useSession();

  return (
    <>
      {!session ? (
        <Login />
      ) : (
        <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
          <div className="grid grid-cols-12 gap-8">
            <div className={`col-span-4`}>
              <MenuSidebar />
            </div>
            <div className={`col-span-8`}>
              <Header />
              {router.query.contentId == "project" ? <ProjectList /> : ""}
              {router.query.contentId == "news" ? <NewstList /> : ""}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
