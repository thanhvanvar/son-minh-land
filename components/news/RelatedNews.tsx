import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

import Menu from "@/components/Menu";
import { Image, Divider, Card, CardHeader, CardBody } from "@nextui-org/react";
import queryString from "query-string";
import NextPageLoading from "@/components/Loading/NextPageLoading";
import Moment from "react-moment";
import Pagination from "../../components/Pagination";

export default function RelatedNews() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    const query = {
      page: router.query.pa != null ? router.query.pa : "1",
      limit: "10",
    };
    const urlAPI = `/api/news/newsListRelated?${queryString.stringify(query)}`;
    fetch(urlAPI)
      .then((res) => res.json())
      .then((data) => {
        setDataList(data);
        setLoading(false);
      });
  }, [router]);

  // @ts-ignore
  return (
    <>
      {loading ? <NextPageLoading /> : ""}
      <div className="grid grid-cols-12 gap-8">
        {dataList.map((row: any, index) => (
          <div className="col-span-12" key={index}>
            <div className="grid grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-4">
                <Image
                  alt="Album cover"
                  className="object-cover h-[80px]"
                  height={400}
                  shadow="md"
                  src={row.image_url}
                  width="100%"
                />
              </div>

              <div className="flex flex-col col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h3 className="text-base line-clamp-1">{row.title}</h3>
                    <p className="text-small text-foreground/80">
                      <Moment format="DD/MM/YYYY">{row.date_added}</Moment>
                    </p>
                    <h1 className="text-sm mt-1 line-clamp-1">
                      {row.description}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
