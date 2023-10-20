import Footer from "@/components/Footer";
import IntroPage from "@/components/IntroPage";
import Menu from "@/components/Menu";
import { Image,Divider } from "@nextui-org/react";

export default function About() {
  return (
    <>
      <Menu />
      <div className="bg-[#ffffff]">
        <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
          <div className="grid grid-cols-12 gap-8">
            <div className={`col-span-6`}>
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={""}
                className="w-full object-cover h-[440px]"
                src={"/about/15.jpg"}
              />
            </div>
            <div className={`col-span-6`}>
              <div className="font-bold text-3xl leading-[40px] text-black">
                VỀ CHÚNG TÔI
              </div>
              <div className="md:pt-4 md:pb-8">
                <Divider className="w-[40px] h-[5px] rounded-lg" />
              </div>
              <div className="text-black">
                Câu chuyện về chuyến đi định mệnh bắt đầu từ cảng nhiệt đới này
                trên con tàu nhỏ bé này ngày nay vẫn được chính phủ mong muốn họ
                sống sót với tư cách là những người lính may mắn để từng khám
                phá phía đông để đến một căn hộ sang trọng.
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
        <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
          <div className="grid grid-cols-12 gap-8">
            <div className={`col-span-6`}>
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={""}
                className="w-full object-cover h-[440px]"
                src={"/about/16.jpg"}
              />
            </div>
            <div className={`col-span-6`}>
              <div className="font-bold text-3xl leading-[40px] text-black">
               Tầm nhìn
              </div>
              <div className="md:pt-4 md:pb-8">
                <Divider className="w-[40px] h-[5px] rounded-lg" />
              </div>
              <div className="text-black">
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
        <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
          <div className="grid grid-cols-12 gap-8">
            
            <div className={`col-span-6`}>
              <div className="font-bold text-3xl leading-[40px] text-black text-end">
                Sứ mệnh
              </div>
              <div className="md:pt-4 md:pb-8  flex justify-end">
                <Divider className="w-[40px] h-[5px] rounded-lg" />
              </div>
              <div className="text-black text-end">
                Câu chuyện về chuyến đi định mệnh bắt đầu từ cảng nhiệt đới này
                trên con tàu nhỏ bé này ngày nay vẫn được chính phủ mong muốn họ
                sống sót với tư cách là những người lính may mắn để từng khám
                phá phía đông để đến một căn hộ sang trọng.
              </div>
            </div>
            <div className={`col-span-6`}>
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={""}
                className="w-full object-cover h-[440px]"
                src={"/about/18.jpg"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff]">
        <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
          <div className="grid grid-cols-12 gap-8">
            <div className={`col-span-6`}>
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={""}
                className="w-full object-cover h-[440px]"
                src={"/about/19.jpg"}
              />
            </div>
            <div className={`col-span-6`}>
              <div className="font-bold text-3xl leading-[40px] text-black">
                Giá trị cốt lõi
              </div>
              <div className="md:pt-4 md:pb-8">
                <Divider className="w-[40px] h-[5px] rounded-lg" />
              </div>
              <div className="text-black">
                Câu chuyện về chuyến đi định mệnh bắt đầu từ cảng nhiệt đới này
                trên con tàu nhỏ bé này ngày nay vẫn được chính phủ mong muốn họ
                sống sót với tư cách là những người lính may mắn để từng khám
                phá phía đông để đến một căn hộ sang trọng.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
