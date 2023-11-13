import React from "react";
import NextLink from "next/link";
import { Link } from "@nextui-org/react";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";
import { supabase } from "./supabaseClient";
import unidecode from "unidecode";
import { toastError, toastSuccess } from "./FtGeneral";

export async function updatetData(table, ojb) {
  const filterParams = {
    tableBase: table,
    obj: ojb,
  };
  fetch("/api/admin/updateData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ filterParams }),
  });
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
export const handleDeletedData = async (tableBase, info) => {
  const query = {
    id: info.id,
    deleted: "1",
  };
  const filterParams = {
    tableBase: tableBase,
    obj: query,
  };
  fetch("/api/admin/updateDataDelete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ filterParams }),
  })
    .then((response) => {
      console.log(response);
      response.json();
    })
    .then((data) => {
      console.log("Dữ liệu sau khi cập nhật:", data);
    });
};
