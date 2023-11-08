import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextPageLoading from "../Loading/NextPageLoading";
import {
  Image,
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/react";
export default function SliderProjectHome() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  let searchParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );

  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    const urlAPI = `/api/projects/projectListHome`;
    fetch(urlAPI)
      .then((res) => res.json())
      .then((data) => {
        setDataList(data);
        setLoading(false);
        console.log(data);
      });
  }, []);

  // @ts-ignore
  return (
    <>
      {loading ? <NextPageLoading /> : ""}
      <div className="gap-4 grid grid-cols-2 md:grid-cols-3">
        {dataList.map((item:any, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.keyword}
                className="w-full object-cover h-[240px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.name_vn}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
