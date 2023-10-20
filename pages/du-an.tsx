import Footer from "@/components/Footer";
import IntroPage from "@/components/IntroPage";
import Menu from "@/components/Menu";
import { Image, Divider, Card, CardHeader, CardBody } from "@nextui-org/react";

export default function Project() {
  return (
    <>
      <Menu />
      <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
        <h1 className="text-3xl font-bold uppercase">Dự án</h1>
      </div>
      <div className="bg-[#ffffff]">
        <div className="container mx-auto md:w-[1170px] p-2 md:p-6 ">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4">
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
            <div className="col-span-4">
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
            <div className="col-span-4">
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
            <div className="col-span-4">
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
            <div className="col-span-4">
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
            <div className="col-span-4">
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

            <div className="col-span-4">
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
            <div className="col-span-4">
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
            <div className="col-span-4">
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
      </div>
      <Footer/>
    </>
  );
}
