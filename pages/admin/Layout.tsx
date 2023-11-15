import React, { FC } from "react";
import MenuSidebar from "./MenuSidebar";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <div className=" p-2 md:p-6 ">
        <div className="grid grid-cols-12 gap-8">
          <div className={`col-span-2`}>
            <MenuSidebar />
          </div>
          <div className={`col-span-10`}>{children}</div>
        </div>
      </div>
    </>
  );
}
