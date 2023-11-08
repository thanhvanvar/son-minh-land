import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { Image, Divider, Card, CardHeader, CardBody } from "@nextui-org/react";
import queryString from "query-string";
import NextPageLoading from "@/components/Loading/NextPageLoading";
import Moment from "react-moment";
import Pagination from "../../components/Pagination";
import RelatedNews from "@/components/news/RelatedNews";

export default function Project() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [totalList, setTotalList] = useState("0");
  useEffect(() => {
    const query = {
      active: "1",
      deleted: "0",
    };
    const urlAPI = `/api/news/newsListTotal?${queryString.stringify(query)}`;
    fetch(urlAPI)
      .then((res) => res.json())
      .then((data) => {
        setTotalList(data.length);
      });
  }, []);
  console.log(totalList);
  let searchParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );

  const [page, setPage] = useState(
    searchParams.get("pa") ? searchParams.get("pa") : "1"
  );

  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    const query = {
      page: router.query.pa != null ? router.query.pa : "1",
      limit: "10",
    };
    const urlAPI = `/api/news/newsList?${queryString.stringify(query)}`;
    fetch(urlAPI)
      .then((res) => res.json())
      .then((data) => {
        setDataList(data);
        setLoading(false);
        console.log(data);
      });
  }, [router]);

  // @ts-ignore
  return (
    <>
      {loading ? <NextPageLoading /> : ""}
      <Menu />
      <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
        <h1 className="text-3xl font-bold uppercase">tin tức</h1>
      </div>
      <div className="bg-[#ffffff]">
        <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <div className="grid grid-cols-12 gap-8">
                {dataList.map((row: any, index) => (
                  <div className="col-span-6" key={index}>
                    <Card>
                      <CardHeader className="p-0 flex-col items-start">
                        <Image
                          alt="Card background"
                          className="object-cover rounded-xl h-[170px]"
                          src={row.image_url}
                          width={470}
                        />
                      </CardHeader>
                      <CardBody className="overflow-visible py-2">
                        <h4
                          className="font-bold text-large line-clamp-2 cursor-pointer"
                          onClick={() =>
                            router.push(
                              `/tin-tuc/${row.keyword}/${row.id}`,
                              undefined,
                              {
                                shallow: true,
                              }
                            )
                          }
                        >
                          {row.title}
                        </h4>
                        <small className="text-default-500">
                          <Moment format="DD/MM/YYYY">{row.date_added}</Moment>
                        </small>
                        <p className="text-sm line-clamp-2">
                          {row.description}
                        </p>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </div>
              <Pagination totalData={totalList} />
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
