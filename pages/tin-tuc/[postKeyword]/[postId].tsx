import React from "react";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { Image, Card, CardBody, CardHeader } from "@nextui-org/react";
import RelatedNews from "@/components/news/RelatedNews";
import Moment from "react-moment";
import { supabase } from "../../../lib/supabaseClient";
import HeaderTag from "@/components/HeaderTag";
export default function NewsDetail({ row }: any) {
  return (
    <>
      <HeaderTag
        title={row.title}
        name={row.title}
        info={row.description}
        img={row.image_url}
      />
      <Menu />
      <div className="bg-[#ffffff]">
        <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
          <div className="grid grid-cols-12 gap-8">
            <div className="md:col-span-8 col-span-12">
              <Card>
                <CardHeader className="p-0">
                  <Image
                    width={900}
                    src={row.image_url}
                    alt="NextUI Album Cover"
                    className="object-cover w-[900px] md:h-[400px] h-[200px] text-large"
                  />
                </CardHeader>
                <CardBody>
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12">
                      <h1 className="text-2xl font-bold">{row.title}</h1>
                    </div>
                    <div className="col-span-12">
                      {" "}
                      <p className="text-sm">
                        <Moment format="DD/MM/YYYY">{row.date_added}</Moment>
                      </p>
                    </div>
                    <div className="col-span-12">
                      <h1 className="text-base font-bold">{row.description}</h1>
                    </div>
                    <div className="col-span-12">
                      <div dangerouslySetInnerHTML={{ __html: row.content }} />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="md:col-span-4 col-span-12">
              <RelatedNews />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export const getStaticPaths = async () => {
  let { data: row, error } = await supabase
    .from("press")
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

  if (row) {
    const paths = row.map((row: any) => ({
      params: {
        postId: row.id,
        postKeyword: row.keywords,
      },
    }));
    return { paths, fallback: "blocking" };
  }
};

export async function getStaticProps(context: any) {
  const id = context.params.postId;
  let { data: row, error } = await supabase
    .from("press")
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
      row,
    },
  };
}
