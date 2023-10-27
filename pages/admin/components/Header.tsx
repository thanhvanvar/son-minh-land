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
  console.log(router);
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
                Cập nhật
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
                  router.push(`/admin/${router.query.contentId}/edit/0`, undefined, {
                    shallow: true,
                  })
                }
              >
                Thêm
              </Button>
              <Button color="danger">Xóa</Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
