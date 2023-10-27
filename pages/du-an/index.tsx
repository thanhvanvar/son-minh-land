import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import IntroPage from "@/components/IntroPage";
import Menu from "@/components/Menu";
import { Image, Divider, Card, CardHeader, CardBody } from "@nextui-org/react";
import queryString from "query-string";
export default function Project() {
  const router = useRouter();
  let searchParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );

  const [page, setPage] = useState(
    searchParams.get("pa") ? searchParams.get("pa") : "1"
  );
  const limit = "10";
  // @ts-ignore
  const offset = (page - 1) * limit;
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    const query = {
      offset: offset,
    };
    const urlAPI = `/api/projects/projectList?${queryString.stringify(query)}`;
    fetch(urlAPI)
      .then((res) => res.json())
      .then((data) => {
        setProjectList(data);
        console.log(data);
      });
  }, []);

  // @ts-ignore
  return (
    <>
      <Menu />
      <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
        <h1 className="text-3xl font-bold uppercase">Dự án</h1>
      </div>
      <div className="bg-[#ffffff]">
        <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
          <div className="grid grid-cols-12 gap-8">
            {projectList.map((row: any, index) => (
              <div className="col-span-4" key={index}>
                <Card>
                  <CardHeader className="p-0 flex-col items-start">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl h-[170px]"
                      src="/11.jpg"
                      width={470}
                    />
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <h4 className="font-bold text-large">{row.name_vn}</h4>
                    {/* <small className="text-default-500">{row.date_added}</small> */}
                    <p className="text-sm line-clamp-1">{row.diachi_vn}</p>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
