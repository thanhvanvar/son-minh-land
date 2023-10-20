import NextImage from "next/image";
import { Inter } from "next/font/google";
import Menu from "../components/Menu";
import Slider from "@/components/Home/Slider";
import {
  Divider,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import * as Icon from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const list = [
    {
      title: "Orange",
      img: "/11.jpg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/11.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/11.jpg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/11.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/11.jpg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/11.jpg",
      price: "$8.00",
    },
  ];

  return (
    <>
      <Menu />
      <Slider />
      <div className="bg-[#001a57]">
        <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
          <div className="grid grid-cols-12 gap-4">
            <div className={`col-span-5`}>
              <div className="font-bold text-3xl leading-[40px] text-white ">
                Cung cấp giải pháp cho sự tăng trưởng thực tế
              </div>
            </div>
            <div className={`col-span-7`}>
              <div className="text-white">
                Câu chuyện về chuyến đi định mệnh bắt đầu từ cảng nhiệt đới này
                trên con tàu nhỏ bé này ngày nay vẫn được chính phủ mong muốn họ
                sống sót với tư cách là những người lính may mắn để từng khám
                phá phía đông để đến một căn hộ sang trọng.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff]">
        <div className="container mx-auto md:w-[1170px] p-2 md:p-6 md:py-[100px]">
          <div className="grid grid-cols-12 gap-4">
            <div className={`col-span-12`}>
              <div className="font-bold text-[28px] leading-[40px] text-center ">
                GIẢI PHÁP CỦA CHÚNG TÔI
              </div>
              <div className="flex justify-center md:pt-4 md:pb-8">
                <Divider className="w-[40px] h-[5px] rounded-lg" />
              </div>
            </div>
            <div className={`col-span-12`}>
              <div className="grid grid-cols-12 gap-4">
                <div className={`col-span-4`}>
                  <div className="grid grid-cols-12 gap-4">
                    <div className={`col-span-12`}>
                      <div className="flex justify-center text-[52px] font-bold text-center">
                        <Icon.Briefcase />
                      </div>
                    </div>
                    <div className={`col-span-12`}>
                      <div className="text-[22px] font-bold text-center">
                        Dịch vụ kinh doanh
                      </div>
                    </div>
                    <div className={`col-span-12`}>
                      <div className="text-center">
                        Họ khám phá những thế giới mới lạ để tìm kiếm cuộc sống
                        mới và những nền văn minh mới một cách táo bạo ở những
                        nơi mà trước đây chưa có con người nào đặt chân tới.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-span-4`}>
                  <div className="grid grid-cols-12 gap-4">
                    <div className={`col-span-12`}>
                      <div className="flex justify-center text-[52px] font-bold text-center">
                        <Icon.GraphUpArrow />
                      </div>
                    </div>
                    <div className={`col-span-12`}>
                      <div className="text-[22px] font-bold text-center">
                        Dịch vụ kinh doanh
                      </div>
                    </div>
                    <div className={`col-span-12`}>
                      <div className="text-center">
                        Họ khám phá những thế giới mới lạ để tìm kiếm cuộc sống
                        mới và những nền văn minh mới một cách táo bạo ở những
                        nơi mà trước đây chưa có con người nào đặt chân tới.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-span-4`}>
                  <div className="grid grid-cols-12 gap-4">
                    <div className={`col-span-12`}>
                      <div className="flex justify-center text-[52px] font-bold text-center">
                        <Icon.Building />
                      </div>
                    </div>
                    <div className={`col-span-12`}>
                      <div className="text-[22px] font-bold text-center">
                        Dịch vụ kinh doanh
                      </div>
                    </div>
                    <div className={`col-span-12`}>
                      <div className="text-center">
                        Họ khám phá những thế giới mới lạ để tìm kiếm cuộc sống
                        mới và những nền văn minh mới một cách táo bạo ở những
                        nơi mà trước đây chưa có con người nào đặt chân tới.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-no-repeat bg-center bg-gradient-to-r from-indigo-500 bg-[#001a57cc]"
        style={{ backgroundImage: "url('/11.jpg')" }}
      >
        <div className="container mx-auto md:w-[1170px] p-2 md:p-6 md:py-[100px]">
          <div className="grid grid-cols-12 gap-4">
            <div className={`col-span-12`}>
              <div className="font-bold text-3xl leading-[40px] text-white md:pb-[40px]">
                VỀ CHÚNG TÔI
              </div>
              <div className="text-white">
                Câu chuyện về chuyến đi định mệnh bắt đầu từ cảng nhiệt đới này
                trên con tàu nhỏ bé này ngày nay vẫn được chính phủ truy nã. Họ
                sống sót với tư cách là những người lính may mắn đến một căn hộ
                sang trọng trên bầu trời để khám phá những thế giới mới lạ nhằm
                tìm kiếm cuộc sống mới và những nền văn minh mới để mạnh dạn đi
                tới nơi chưa có người nào đi tới. Bạn sẽ thấy món quà lớn nhất
                sẽ là từ tôi và tấm thiệp đính kèm sẽ cảm ơn bạn vì đã trở thành
                một người bạn món quà lớn nhất.
              </div>
            </div>
            <div className={`col-span-7`}></div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff]">
        <div className="container mx-auto md:w-[1170px] p-2 md:p-6 md:py-[100px]">
          <div className="grid grid-cols-12 gap-4">
            <div className={`col-span-12 `}>
              <div className="font-bold text-[38px] leading-[40px] text-center  ">
                DỰ ÁN
              </div>
              <div className="flex justify-center md:pt-4 md:pb-8">
                <Divider className="w-[40px] h-[5px] rounded-lg" />
              </div>
            </div>
            <div className={`col-span-12`}>
              <div className="gap-4 grid grid-cols-2 md:grid-cols-3">
                {list.map((item, index) => (
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
                        alt={item.title}
                        className="w-full object-cover h-[240px]"
                        src={item.img}
                      />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                      <b>{item.title}</b>
                      <p className="text-default-500">{item.price}</p>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#001a57]">
        <div className="container mx-auto md:w-[1170px] p-2 md:p-6 md:py-[100px]">
          <div className="grid grid-cols-12 gap-4">
            <div className={`col-span-12`}>
              <div className="font-bold text-[28px] text-white leading-[40px] text-center">
                TẠI SAO CHỌN CHÚNG TÔI
              </div>
              <div className="flex justify-center md:pt-4 md:pb-8">
                <Divider className="w-[40px] h-[5px] bg-white rounded-lg" />
              </div>
            </div>
            <div className={`col-span-12`}>
              <div className="grid grid-cols-12 gap-4">
                <div className={`col-span-4`}>
                  <div className="grid grid-cols-12 gap-4">
                    <div className={`col-span-12`}>
                      <div className="text-[22px] text-white font-bold text-center">
                        Chiến lược tốt nhất
                      </div>
                    </div>
                    <div className={`col-span-12`}>
                      <div className="text-center text-white">
                        Họ khám phá những thế giới mới lạ để tìm kiếm cuộc sống
                        mới và những nền văn minh mới một cách táo bạo ở những
                        nơi mà trước đây chưa có con người nào đặt chân tới.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-span-4`}>
                  <div className="grid grid-cols-12 gap-4">
                    <div className={`col-span-12`}>
                      <div className="text-[22px] text-white font-bold text-center">
                        Dịch vụ chất lượng cao
                      </div>
                    </div>
                    <div className={`col-span-12`}>
                      <div className="text-center text-white">
                        Họ khám phá những thế giới mới lạ để tìm kiếm cuộc sống
                        mới và những nền văn minh mới một cách táo bạo ở những
                        nơi mà trước đây chưa có con người nào đặt chân tới.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-span-4`}>
                  <div className="grid grid-cols-12 gap-4">
                    <div className={`col-span-12`}>
                      <div className="text-[22px] text-white font-bold text-center">
                        Hỗ trợ thân thiện
                      </div>
                    </div>
                    <div className={`col-span-12`}>
                      <div className="text-center text-white">
                        Họ khám phá những thế giới mới lạ để tìm kiếm cuộc sống
                        mới và những nền văn minh mới một cách táo bạo ở những
                        nơi mà trước đây chưa có con người nào đặt chân tới.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff]">
        <div className="container mx-auto md:w-[1170px] p-2 md:p-6 md:py-[100px]">
          <div className="grid grid-cols-12 gap-4">
            <div className={`col-span-12`}>
              <div className="font-bold text-[28px] leading-[40px] text-center md:pb-[40px]">
                TIN MỚI NHẤT
              </div>
            </div>
            <div className={`col-span-12`}>
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
                <SwiperSlide className="pb-3">
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
                      <h4 className="font-bold text-large">Frontend Radio</h4>
                      <small className="text-default-500">12 Tracks</small>
                      <p className="text-sm">Daily Mix</p>
                    </CardBody>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
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
                      <h4 className="font-bold text-large">Frontend Radio</h4>
                      <small className="text-default-500">12 Tracks</small>
                      <p className="text-sm">Daily Mix</p>
                    </CardBody>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
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
                      <h4 className="font-bold text-large">Frontend Radio</h4>
                      <small className="text-default-500">12 Tracks</small>
                      <p className="text-sm">Daily Mix</p>
                    </CardBody>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
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
                      <h4 className="font-bold text-large">Frontend Radio</h4>
                      <small className="text-default-500">12 Tracks</small>
                      <p className="text-sm">Daily Mix</p>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
