import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../lib/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";

import {
  Accordion,
  AccordionItem,

  Avatar,
  Listbox,
  ListboxItem,
 
} from "@nextui-org/react";

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
      <Accordion
        selectionMode="multiple"
        variant="bordered"
        defaultExpandedKeys={["1", "2", "3"]}
        showDivider={false}
        isCompact
      >
        <AccordionItem
          key="1"
          textValue="avatar"
          aria-label={userName}
          startContent={
            <Avatar
              isBordered
              color="primary"
              radius="lg"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
          }
          subtitle={userEmail}
          title={userName}
        >
          <Listbox aria-label="Actions">
            {/* <ListboxItem
              key="thiet-lap-tai-khoan"
              textValue="thiet-lap-tai-khoan"
              endContent={<Icon.CaretRightFill size={13} />}
              startContent={<Icon.Gear size={20} />}
              showDivider
              onPress={() =>
                router.push("/admin/project", undefined, {
                  shallow: true,
                })
              }
            >
              <span className="text-base">Thiết lập tài khoản</span>
            </ListboxItem> */}
            <ListboxItem
              key="logout"
              textValue="logout"
              endContent={<Icon.CaretRightFill size={13} />}
              startContent={<Icon.BoxArrowRight size={20} />}
              onClick={() => handleLogout()}
              showDivider
            >
              <span className="text-base">Đăng xuất</span>
            </ListboxItem>
          </Listbox>
        </AccordionItem>
        <AccordionItem
          key="2"
          textValue="quan-ly"
          aria-label="Quản lý"
          title={<span className="font-bold text-base uppercase">Quản lý</span>}
        >
          <Listbox aria-label="Actions">
            <ListboxItem
              key="du-an"
              textValue="du-an"
              endContent={<Icon.CaretRightFill size={13} />}
              startContent={<Icon.Gear size={20} />}
              onClick={() =>
                router.push("/admin/project", undefined, {
                  shallow: true,
                })
              }
              showDivider
            >
              <span className="text-base">Dự án</span>
            </ListboxItem>
            <ListboxItem
              key="tin-tuc"
              textValue="tin-tuc"
              endContent={<Icon.CaretRightFill size={13} />}
              startContent={<Icon.BoxArrowRight size={20} />}
              onClick={() =>
                router.push("/admin/news", undefined, {
                  shallow: true,
                })
              }
            >
              <span className="text-base">Tin tức</span>
            </ListboxItem>
          </Listbox>
        </AccordionItem>
      </Accordion>
    </>
  );
}
