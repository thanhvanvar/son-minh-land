import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextPageLoading from "../Loading/NextPageLoading";
import {
  Image,
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Moment from "react-moment";
export default function SliderNewsHome() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    const urlAPI = `/api/news/newsListHome`;
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
      
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 20,
          },
        }}
        className="mySwiper pb-3"
      >
        {dataList.map((item: any, index) => (
          <SwiperSlide className="pb-3">
            <Card>
              <CardHeader className="p-0 flex-col items-start">
                <Image
                  alt="Card background" 
                  width={470}
                  className="object-cover rounded-xl w-[470px] h-[170px]"
                  src={item.image_url}
                  
                />
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <h4 className="font-bold text-large line-clamp-2">{item.title}</h4>
                <small className="text-default-500 py-2"><Moment format="DD/MM/YYYY">{item.date_added}</Moment></small>
                <p className="text-sm line-clamp-2">{item.description}</p>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
