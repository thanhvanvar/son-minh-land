import React from "react";
import { useSession } from "@supabase/auth-helpers-react";
import MenuSidebar from "./MenuSidebar";
import Login from "./user/Login";

export default function Home() {
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
            <div className={`col-span-9`}></div>
          </div>
        </div>
      )}
    </>
  );
}
