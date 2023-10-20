import { Logo } from "./Logo";
import NextImage from "next/image";
import { Image, Link } from "@nextui-org/react";
import * as Icon from "react-bootstrap-icons";
export default function Footer() {
  return (
    <>
      <div className={`bg-[#001a57]`}>
        <div className="container mx-auto p-6 md:w-[1280px] py-10 md:py-32">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-5">
              <Image
                className="object-contain w-[180px] h-[68px]"
                as={NextImage}
                src={"/vercel.svg"}
                alt="logo-dksantmdt"
                width={180}
                height={68}
              />
              {/* <p className={`text-2xl text-white md:pt-3`}>
                CÔNG TY CỔ PHẦN ĐẦU TƯ SON MINH LAND
              </p> */}
              <p className={`text-sm md:text-base text-gray-400 py-4 pr-8`}>
                {" "}
                Website được sở hữu và quản lý bởi: Công ty cổ phần đầu tư ALI.
                Giấy phép đăng ký kinh doanh số: 0313577807 do Sở Kế Hoạch & Đầu
                Tư TP Hồ Chí Minh cấp ngày 15/12/2015
              </p>
            </div>
            <div className="col-span-12 md:col-span-2">
              <p className={`text-2xl text-white`}>KHÁM PHÁ</p>

              <p className={`text-sm pt-5`}>
                <Link href="#" className={`text-gray-400`} underline="always">
                  Về chúng tôi
                </Link>
              </p>
              <p className={`text-sm pt-5`}>
                <Link href="#" className={`text-gray-400`} underline="always">
                  Dự án
                </Link>
              </p>
              <p className={`text-sm pt-5`}>
                <Link href="#" className={`text-gray-400`} underline="always">
                  Tin tức
                </Link>
              </p>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className={`text-2xl text-white`}>LIÊN HỆ</p>
              <div className="grid grid-rows-3 gap-y-6 pt-5">
                <div className="row-span-1 flex items-center">
                  <Icon.GeoAltFill fill={"#ffffff"} size={20} />
                  <p className={`text-sm md:text-base text-gray-400 ml-1`}>
                    37/29 Đường C1, Phường 13, Quận Tân Bình, TP. HCM
                  </p>
                </div>
                <div className="row-span-1 flex items-center">
                  <Icon.PhoneFill fill={"#ffffff"} size={20} />
                  <p className={`text-sm md:text-base text-gray-400 ml-1`}>
                    0966417151
                  </p>
                </div>
                <div className="row-span-1 flex items-center">
                  <Icon.EnvelopeFill fill={"#ffffff"} size={20} />
                  <p className={`text-sm md:text-base text-gray-400 ml-1`}>
                    contact@alinhadat.vn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
