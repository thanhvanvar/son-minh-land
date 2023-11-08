import React from "react";
import { useSession } from "@supabase/auth-helpers-react";
import MenuSidebar from "./MenuSidebar";
import Login from "./user/Login";
import { useRouter } from "next/router";
import ProjectList from "./components/projects/projectList";
import ProjectDetail from "./[contentId]/edit/[postId]";

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
            <div className={`col-span-3`}>
              <MenuSidebar />
            </div>
            <div className={`col-span-9`}>
              {router.query.contentId=='project'?<ProjectList/>:''}
              {router.query.contentId=='project/edit'?<ProjectDetail/>:''}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
