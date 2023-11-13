import React, { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import queryString from "query-string";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { Image, Divider } from "@nextui-org/react";
import getConfig from "next/config";

function ProjectDetail() {
  const router = useRouter();
  const [project, setProject]: any = useState([]);

  useEffect(() => {
    const query = {
      id: router.query.postId,
    };
    const urlAPI = `/api/projects/projectDetail?${queryString.stringify(
      query
    )}`;
    fetch(urlAPI)
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        console.log(data);
      });
  }, [router.query.postId]);
  return (
    <>
      <Menu />
      <div className="bg-[#ffffff]">
        <div className="container mx-auto md:w-[1170px] p-4 md:p-6 ">
          <div className="grid grid-cols-12 gap-8">
            <div className={`md:col-span-6 col-span-12`}>
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={""}
                className="w-full object-cover h-[240px] md:h-[440px]"
                src={project.img}
              />
            </div>
            <div className={`md:col-span-6 col-span-12`}>
              <div className="font-bold md:text-3xl text-2xl leading-[40px] text-black">
                {project.name_vn}
              </div>
              <div className="md:pt-4 md:pb-8 pt-1 pb-4">
                <Divider className="w-[40px] h-[5px] rounded-lg" />
              </div>
              <div className="text-black">{project.info_vn}</div>
            </div>
          </div>
        </div>
      </div>

      {project.tongquan_vn ? (
        <div className="bg-[#ffffff]">
          <div className="container mx-auto md:w-[1170px] p-4 md:p-6 md:py-[50px]">
            <div className="grid grid-cols-12 gap-4">
              <div className={`col-span-12`}>
                <div className="font-bold md:text-[28px] text-xl uppercase leading-[40px] text-center">
                  Tổng Quan
                </div>
                <div className="flex justify-center md:pt-4 md:pb-8">
                  <Divider className="w-[40px] h-[5px] bg-black rounded-lg" />
                </div>
              </div>
              <div className={`col-span-12`}>
                <div
                  dangerouslySetInnerHTML={{ __html: project.tongquan_vn }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {project.vitri_vn ? (
        <div className="bg-[#ffffff]">
          <div className="container mx-auto md:w-[1170px] p-4 md:p-6 md:py-[50px]">
            <div className="grid grid-cols-12 gap-4">
              <div className={`col-span-12`}>
                <div className="font-bold md:text-[28px] text-xl uppercase leading-[40px] text-center">
                  vị trí
                </div>
                <div className="flex justify-center md:pt-4 md:pb-8">
                  <Divider className="w-[40px] h-[5px] bg-black rounded-lg" />
                </div>
              </div>
              <div className={`col-span-12`}>
                <div dangerouslySetInnerHTML={{ __html: project.vitri_vn }} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {project.tienich_vn ? (
        <div className="bg-[#ffffff]">
          <div className="container mx-auto md:w-[1170px] p-4 md:p-6 md:py-[50px]">
            <div className="grid grid-cols-12 gap-4">
              <div className={`col-span-12`}>
                <div className="font-bold md:text-[28px] text-xl uppercase leading-[40px] text-center">
                  tiện ích
                </div>
                <div className="flex justify-center md:pt-4 md:pb-8">
                  <Divider className="w-[40px] h-[5px] bg-black rounded-lg" />
                </div>
              </div>
              <div className={`col-span-12`}>
                <div dangerouslySetInnerHTML={{ __html: project.tienich_vn }} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {project.matbang_vn ? (
        <div className="bg-[#ffffff]">
          <div className="container mx-auto md:w-[1170px] p-4 md:p-6 md:py-[50px]">
            <div className="grid grid-cols-12 gap-4">
              <div className={`col-span-12`}>
                <div className="font-bold md:text-[28px] text-xl uppercase leading-[40px] text-center">
                  mặt bằng
                </div>
                <div className="flex justify-center md:pt-4 md:pb-8">
                  <Divider className="w-[40px] h-[5px] bg-black rounded-lg" />
                </div>
              </div>
              <div className={`col-span-12`}>
                <div dangerouslySetInnerHTML={{ __html: project.matbang_vn }} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {project.tiendo_vn ? (
        <div className="bg-[#ffffff]">
          <div className="container mx-auto md:w-[1170px] p-4 md:p-6 md:py-[50px]">
            <div className="grid grid-cols-12 gap-4">
              <div className={`col-span-12`}>
                <div className="font-bold md:text-[28px] text-xl uppercase leading-[40px] text-center">
                  tiến độ
                </div>
                <div className="flex justify-center md:pt-4 md:pb-8">
                  <Divider className="w-[40px] h-[5px] bg-black rounded-lg" />
                </div>
              </div>
              <div className={`col-span-12`}>
                <div dangerouslySetInnerHTML={{ __html: project.tiendo_vn }} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {project.pttt_vn ? (
        <div className="bg-[#ffffff]">
          <div className="container mx-auto md:w-[1170px] p-4 md:p-6 md:py-[50px]">
            <div className="grid grid-cols-12 gap-4">
              <div className={`col-span-12`}>
                <div className="font-bold md:text-[28px] text-xl uppercase leading-[40px] text-center">
                  PT Thanh toán
                </div>
                <div className="flex justify-center md:pt-4 md:pb-8">
                  <Divider className="w-[40px] h-[5px] bg-black rounded-lg" />
                </div>
              </div>
              <div className={`col-span-12`}>
                <div dangerouslySetInnerHTML={{ __html: project.pttt_vn }} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(
    "http://localhost:3000/api/projects/projectListGetStaticPath"
  );
  const data = await res.json();

  const paths = data.map((row: any) => ({
    params: {
      postId: row.id,
      postType: row.type,
      postKeyword: row.keyword,
    },
  }));
  return { paths, fallback: "blocking" };
};

export async function getStaticProps(context: any) {
  const id = context.params.postId;
  const res = await fetch(
    `http://localhost:3000/api/projects/projectListGetStaticPath?id=${id}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
export default ProjectDetail;
