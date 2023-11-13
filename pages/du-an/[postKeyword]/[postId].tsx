import React, { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import queryString from "query-string";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { Image, Divider } from "@nextui-org/react";
import getConfig from "next/config";
import { fetchData_project } from "@/lib/FtProgress";
import { supabase } from "../../../lib/supabaseClient";

function ProjectDetail({ projects }: any) {
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
                src={projects.img}
              />
            </div>
            <div className={`md:col-span-6 col-span-12`}>
              <div className="font-bold md:text-3xl text-2xl leading-[40px] text-black">
                {projects.name_vn}
              </div>
              <div className="md:pt-4 md:pb-8 pt-1 pb-4">
                <Divider className="w-[40px] h-[5px] rounded-lg" />
              </div>
              <div className="text-black">{projects.info_vn}</div>
            </div>
          </div>
        </div>
      </div>
      {projects.tongquan_vn ? (
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
                  dangerouslySetInnerHTML={{ __html: projects.tongquan_vn }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {projects.vitri_vn ? (
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
                <div dangerouslySetInnerHTML={{ __html: projects.vitri_vn }} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {projects.tienich_vn ? (
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
                <div
                  dangerouslySetInnerHTML={{ __html: projects.tienich_vn }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {projects.matbang_vn ? (
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
                <div
                  dangerouslySetInnerHTML={{ __html: projects.matbang_vn }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {projects.tiendo_vn ? (
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
                <div dangerouslySetInnerHTML={{ __html: projects.tiendo_vn }} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {projects.pttt_vn ? (
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
                <div dangerouslySetInnerHTML={{ __html: projects.pttt_vn }} />
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
  let { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .eq("active", "1")
    .eq("deleted", "0")
    .order("date_added", { ascending: false })
    .range(0, 7);
  if (error) {
    console.log("Error:", error.message);
  } else {
    console.log("Success:", "ok");
  }
  if (projects) {
    const paths = projects.map((row: any) => ({
      params: {
        postId: row.id,
        postType: row.type,
        postKeyword: row.keyword,
      },
    }));
    return { paths, fallback: "blocking" };
  }
};

export async function getStaticProps(context: any) {
  const id = context.params.postId;
  let { data: projects, error } = await supabase
    .from("projects")
    .select(`*`)
    .eq("id", id)
    .single();
  if (error) {
    console.log("Error:", error.message);
  } else {
    console.log("Success:", "ok");
  }
  return {
    props: {
      projects,
    },
  };
}
export default ProjectDetail;
