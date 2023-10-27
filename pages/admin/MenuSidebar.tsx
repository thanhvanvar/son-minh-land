import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Divider, Accordion, AccordionItem } from "@nextui-org/react";
import * as Icon from "react-bootstrap-icons";

export default function MenuSidebar() {
  const router = useRouter();
  return (
    <>
      <Accordion
        selectionMode="multiple"
        variant="bordered"
        defaultExpandedKeys={["1", "2", "3"]}
      >
        <AccordionItem key="1" aria-label="Quản lý" title="Quản lý">
          <Divider />
          {/* <div
            className="flex gap-3 p-3 items-center justify-between cursor-pointer hover:bg-gray-100"
            onClick={() =>
              router.push("/trang-ca-nhan/dang-tin", undefined, {
                shallow: true,
              })
            }
          >
            <div className="flex items-center text-base">
              <div className="font-bold pr-2">
                <Icon.PencilSquare size={20} />
              </div>
              <div>Đăng tin mới</div>
            </div>
            <div className="">
              <Icon.CaretRightFill size={13} />
            </div>
          </div>
          <Divider /> */}
          {/* <div
            className="flex gap-3 p-3 items-center justify-between cursor-pointer hover:bg-gray-100"
            onClick={() =>
              router.push("/trang-ca-nhan?sta=tin-da-dang", undefined, {
                shallow: true,
              })
            }
          >
            <div className="flex items-center text-base">
              <div className="font-bold pr-2">
                <Icon.PatchCheck size={20} />
              </div>
              <div>Đã đăng</div>
            </div>
            <div className="">
              <Icon.CaretRightFill size={13} />
            </div>
          </div>
          <Divider /> */}
          <div
            className="flex gap-3 p-3 items-center justify-between cursor-pointer hover:bg-gray-100"
            onClick={() =>
              router.push("/admin/project", undefined, {
                shallow: true,
              })
            }
          >
            <div className="flex items-center text-base">
              <div className="font-bold pr-2">
                <Icon.Building size={20} />
              </div>
              <div>Dự án</div>
            </div>
            <div className="">
              <Icon.CaretRightFill size={13} />
            </div>
          </div>
          <Divider />
          <div
            className="flex gap-3 p-3 items-center justify-between cursor-pointer hover:bg-gray-100"
            onClick={() =>
              router.push("/admin/news", undefined, {
                shallow: true,
              })
            }
          >
            <div className="flex items-center text-base">
              <div className="font-bold pr-2">
                <Icon.Backspace size={20} />
              </div>
              <div>Tin tức</div>
            </div>
            <div className="">
              <Icon.CaretRightFill size={13} />
            </div>
          </div>
        </AccordionItem>
        {/* <AccordionItem
          key="2"
          aria-label="Quản lý tài khoản"
          title="Quản lý tài khoản"
        >
          <Divider />
          <div
            className="flex gap-3 p-3 items-center justify-between cursor-pointer hover:bg-gray-100"
            onClick={() =>
              router.push("/trang-ca-nhan/thong-tin-ca-nhan", undefined, {
                shallow: true,
              })
            }
          >
            <div className="flex items-center text-base">
              <div className="font-bold pr-2">
                <Icon.PersonGear size={20} />
              </div>
              <div>Chỉnh sữa thông tin</div>
            </div>
            <div className="">
              <Icon.CaretRightFill size={13} />
            </div>
          </div>
          <Divider />
          <div
            className="flex gap-3 p-3 items-center justify-between cursor-pointer hover:bg-gray-100"
            onClick={() =>
              router.push("/trang-ca-nhan/doi-mat-khau", undefined, {
                shallow: true,
              })
            }
          >
            <div className="flex items-center text-base">
              <div className="font-bold pr-2">
                <Icon.PersonBoundingBox size={20} />
              </div>
              <div>Đổi mật khẩu</div>
            </div>
            <div className="">
              <Icon.CaretRightFill size={13} />
            </div>
          </div>
        </AccordionItem> */}
      </Accordion>
    </>
  );
}
