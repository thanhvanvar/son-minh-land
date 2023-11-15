import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@nextui-org/react";
import * as Icon from "react-bootstrap-icons";

export default function HeaderAdmin() {
  const router = useRouter();
  let searchParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const [Title, setTile] = useState("");
  useEffect(() => {
    if (router.query.contentId == "project") {
      setTile("Dự án");
    }
    if (router.asPath == "/admin/project/edit/0") {
      setTile("Thêm dự án");
    }
    if (router.query.contentId == "project" && router.query.postId) {
      setTile("Chỉnh sửa dự án");
    }
    if (router.query.contentId == "news") {
      setTile("Tin tức");
    }
    if (router.asPath == "/admin/news/edit/0") {
      setTile("Thêm tin tức");
    }
    if (router.query.contentId == "news" && router.query.postId) {
      setTile("Chỉnh sửa tin tức");
    }
  }, [router.query]);
  return (
    <>
      <div className="grid grid-cols-12 gap-8 mb-[20px] ">
        <div className={`col-span-6`}>
          <p className="font-bold text-2xl">{Title}</p>
        </div>
        <div className={`col-span-6`}>
          {router.query.postId ? (
            <div className="flex gap-4 justify-end">
              <Button color="success" type="submit">
                <span className="text-white">Cập nhật</span>
              </Button>
              <Button
                color="danger"
                onClick={() =>
                  router.push(`/admin/${router.query.contentId}`, undefined, {
                    shallow: true,
                  })
                }
              >
                Quay lại
              </Button>
            </div>
          ) : (
            <div className="flex gap-4 justify-end">
              <Button
                color="success"
                onClick={() =>
                  router.push(
                    `/admin/${router.query.contentId}/edit/0`,
                    undefined,
                    {
                      shallow: true,
                    }
                  )
                }
              >
                <span className="text-white">Thêm</span>
              </Button>
              <Button
                color="danger"
                onClick={() => {
                  router.query.del=='1'?router.push(
                    `/admin/${router.query.contentId}`,
                    undefined,
                    {
                      shallow: true,
                    }
                  ):router.push(
                    `/admin/${router.query.contentId}?del=1`,
                    undefined,
                    {
                      shallow: true,
                    }
                  )
                  ;
                }}
              >
                {router.query.del=='1'?'Quay lại':' Đã xóa'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
