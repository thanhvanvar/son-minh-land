import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import IntroPage from "@/components/IntroPage";
import Menu from "@/components/Menu";
import {
  Image,
  Divider,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@nextui-org/react";

export default function News() {
  
  return (
    <>
      <Menu />
      <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
        <h1 className="text-3xl font-bold uppercase">tin tức</h1>
      </div>
      <div className="bg-[#ffffff]">
        <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-6">
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
                </div>
                <div className="col-span-6">
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
                </div>
                <div className="col-span-6">
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
                </div>
                <div className="col-span-6">
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
                </div>
                <div className="col-span-6">
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
                </div>
                <div className="col-span-6">
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
                </div>
                <div className="col-span-6">
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
                </div>
                <div className="col-span-6">
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
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12">
                  <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                      <Image
                        alt="Album cover"
                        className="object-cover h-[80px]"
                        height={400}
                        shadow="md"
                        src="/11.jpg"
                        width="100%"
                      />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-0">
                          <h3 className="text-base ">Daily Mix</h3>
                          <p className="text-small text-foreground/80">
                            12 Tracks
                          </p>
                          <h1 className="text-sm mt-1">Frontend Radio</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                      <Image
                        alt="Album cover"
                        className="object-cover h-[80px]"
                        height={400}
                        shadow="md"
                        src="/11.jpg"
                        width="100%"
                      />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-0">
                          <h3 className="text-base ">Daily Mix</h3>
                          <p className="text-small text-foreground/80">
                            12 Tracks
                          </p>
                          <h1 className="text-sm mt-1">Frontend Radio</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                      <Image
                        alt="Album cover"
                        className="object-cover h-[80px]"
                        height={400}
                        shadow="md"
                        src="/11.jpg"
                        width="100%"
                      />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-0">
                          <h3 className="text-base ">Daily Mix</h3>
                          <p className="text-small text-foreground/80">
                            12 Tracks
                          </p>
                          <h1 className="text-sm mt-1">Frontend Radio</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                      <Image
                        alt="Album cover"
                        className="object-cover h-[80px]"
                        height={400}
                        shadow="md"
                        src="/11.jpg"
                        width="100%"
                      />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-0">
                          <h3 className="text-base ">Daily Mix</h3>
                          <p className="text-small text-foreground/80">
                            12 Tracks
                          </p>
                          <h1 className="text-sm mt-1">Frontend Radio</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                      <Image
                        alt="Album cover"
                        className="object-cover h-[80px]"
                        height={400}
                        shadow="md"
                        src="/11.jpg"
                        width="100%"
                      />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-0">
                          <h3 className="text-base ">Daily Mix</h3>
                          <p className="text-small text-foreground/80">
                            12 Tracks
                          </p>
                          <h1 className="text-sm mt-1">Frontend Radio</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                      <Image
                        alt="Album cover"
                        className="object-cover h-[80px]"
                        height={400}
                        shadow="md"
                        src="/11.jpg"
                        width="100%"
                      />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-0">
                          <h3 className="text-base ">Daily Mix</h3>
                          <p className="text-small text-foreground/80">
                            12 Tracks
                          </p>
                          <h1 className="text-sm mt-1">Frontend Radio</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
