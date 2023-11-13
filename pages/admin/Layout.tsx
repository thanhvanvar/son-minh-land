import React, { FC } from "react";
import MenuSidebar from "./MenuSidebar";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
        <div className="grid grid-cols-12 gap-8">
          <div className={`col-span-4`}>
            <MenuSidebar />
          </div>
          <div className={`col-span-8`}>{children}</div>
        </div>
      </div>
    </>
  );
}
