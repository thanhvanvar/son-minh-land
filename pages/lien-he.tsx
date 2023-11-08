import React from "react";
import { Input, Textarea, Image, Button } from "@nextui-org/react";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Menu />
      <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
        <h1 className="md:text-3xl text-xl font-bold uppercase text-center">
          Liên hệ với chúng tôi
        </h1>
      </div>
      <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
        <div className="grid grid-cols-12 gap-8">
          <div className="md:col-span-5 col-span-12">
            <Image
              alt="Card background"
              className="object-cover rounded-xl md:h-[500px] h-[400px]"
              src="/contact/22.jpg"
              width={470}
            />
          </div>
          <div className="md:col-span-7 col-span-12">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-6">
                <Input type="text" label="Tên" />
              </div>
              <div className="col-span-6">
                <Input type="number" label="Số điện thoại" />
              </div>
              <div className="col-span-12">
                <Input type="email" label="Email" />
              </div>
              <div className="col-span-12">
                <Textarea
                  labelPlacement="outside"
                  placeholder="Nội dung"
                  className="w-full"
                />
              </div>
              <div className="col-span-12">
                <Button color="primary">Gửi nội dung</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
