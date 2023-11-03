import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../lib/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";

import { Divider, Accordion, AccordionItem, User } from "@nextui-org/react";
import * as Icon from "react-bootstrap-icons";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";
import queryString from "query-string";

export default function MenuSidebar() {
  const router = useRouter();
  const session = useSession();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const handleLogout = () => {
    deleteCookie("sb-vyjeeoqetducftdoemqr-auth-token");
    supabase.auth.signOut();
  };
  useEffect(() => {
    if (session) {
      const query = {
        id: session.user.id,
      };
      const urlAPI = `/api/admin/user/profileDetail?${queryString.stringify(
        query
      )}`;
      fetch(urlAPI)
        .then((res) => res.json())
        .then((data) => {
          setUserName(data.full_name);
          setUserEmail(data.email);
        });
    }
  }, []);
  return (
    <>
      <User
        name={userName}
        description={userEmail}
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        }}
      />
      <Accordion
        selectionMode="multiple"
        variant="bordered"
        defaultExpandedKeys={["1", "2", "3"]}
      >
        <AccordionItem key="2" aria-label="Quản lý" title="Quản lý">
          <Divider />

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
      <div
        className="flex gap-3 p-3 items-center justify-between cursor-pointer hover:bg-gray-100"
        onClick={() => handleLogout()}
      >
        <div className="flex items-center text-base">
          <div>Đăng xuất</div>
        </div>
        <div className="">
          <Icon.CaretRightFill size={13} />
        </div>
      </div>
    </>
  );
}
