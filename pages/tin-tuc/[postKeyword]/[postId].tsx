import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import queryString from "query-string";
import Footer from "@/components/Footer";

import Menu from "@/components/Menu";
import { Image, Divider, Card, CardBody, CardHeader } from "@nextui-org/react";
import parse from "html-react-parser";
import RelatedNews from "@/components/news/RelatedNews";
import Moment from "react-moment";
const { convert } = require("html-to-text");
const options = {
  wordwrap: 130,
  // ...
};
export default function NewsDetail() {
  const router = useRouter();
  const [dataList, setDataList]: any = useState([]);

  useEffect(() => {
    const query = {
      id: router.query.postId,
    };
    const urlAPI = `/api/news/newsDetail?${queryString.stringify(query)}`;
    fetch(urlAPI)
      .then((res) => res.json())
      .then((data) => {
        setDataList(data);
        console.log(data);
      });
  }, [router.query.postId]);
  return (
    <>
      <Menu />
      <div className="bg-[#ffffff]">
        <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <Card>
                <CardHeader className="p-0">
                  <Image
                    width={900}
                    src={dataList.image_url}
                    alt="NextUI Album Cover"
                    className="object-cover w-[900px] h-[400px] text-large"
                  />
                </CardHeader>
                <CardBody>
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12">
                      <h1 className="text-2xl font-bold">{dataList.title}</h1>
                    </div>
                    <div className="col-span-12">
                      {" "}
                      <p className="text-sm">
                        <Moment format="DD/MM/YYYY">
                          {dataList.date_added}
                        </Moment>
                      </p>
                    </div>
                    <div className="col-span-12">
                      <h1 className="text-base font-bold">
                        {dataList.description}
                      </h1>
                    </div>
                    <div className="col-span-12">
                      <div
                        dangerouslySetInnerHTML={{ __html: dataList.content }}
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="col-span-4">
              <RelatedNews />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}