import React from "react";
import NextLink from "next/link";
import { Link } from "@nextui-org/react";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";
import { supabase } from "../lib/supabaseClient";
import unidecode from "unidecode";

export const onErrorImage = (e) => {
  e.target.src = "/image-ali-2.png";
};

export function checkLoginhtml() {
  return (
    <>
      Chưa đăng nhập, Vui lòng bấm vào đây để{" "}
      <Link as={NextLink} href={`/user/signin`}>
        <a>đăng nhập</a>
      </Link>
    </>
  );
}
export function removeDiacritics(text) {
  return text
    .normalize("NFD") // Chuẩn hóa thành Unicode Composition
    .replace(/[\u0300-\u036f]/g, ""); // Loại bỏ tất cả các dấu diacritics (dấu thanh/tone)
}
export function convertKeyword(inputString) {
  const text = unidecode(inputString);
  // Chuyển chuỗi thành chữ thường
  const lowercaseString = text.toLowerCase();
  // Loại bỏ các ký tự đặc biệt ở đầu và cuối chuỗi
  const cleanedSlug = lowercaseString.replace(/^[^a-z0-9]+|[^a-z0-9]+$/gi, "");
  // Loại bỏ các ký tự không phải chữ cái và số
  const alphanumericString = cleanedSlug.replace(/[^a-z0-9]/g, " ");
  // Thay thế khoảng trắng bằng dấu gạch ngang
  const slug = alphanumericString.replace(/\s+/g, "-");
  return slug;
}

export function toastError(content) {
  let error = toast.error(content, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return error;
}
export function toastWarn(content) {
  let warn = toast.warn(content, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return warn;
}

export function toastSuccess(content) {
  const success = toast.success(content, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return success;
}

export function toastInfo(content) {
  const info = toast.info(content, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return info;
}

export const themeSelect = (theme) => ({
  ...theme,
  borderRadius: 5,
  colors: {
    ...theme.colors,
    primary25: "#ddd",
    primary: "#2dbe6c",
  },
});

export function search(nameKey, myArray) {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].keyword === nameKey) {
      return myArray[i];
    }
  }
}

export function checkLogin() {
  const isLoggedIn = true; // Giả sử đã đăng nhập
  if (!isLoggedIn) {
    router.push("/user/signin"); // Chuyển hướng đến trang đăng nhập
  }
}

export async function updatetData(table, ojb) {
  console.log(ojb.id);
  const { data, error } = await supabase
    .from(table)
    .update(ojb)
    .eq("id", String(ojb.id));
  if (error) {
    console.log("Error:", error.message);
  } else {
    console.log(data);
    toastSuccess("Sửa tin thành công");
  }
  // const filterParams = {
  //   tableBase: table,
  //   obj: ojb,
  // };
  // fetch("/api/admin/updateData", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ filterParams }),
  // });
}
export async function insertData(table, ojb) {
  const { data, error } = await supabase.from(table).insert(ojb);
  if (error) {
    console.log("Error:", error.message);
  } else {
    console.log(data);
    toastSuccess("Đăng tin thành công");
  }
}
