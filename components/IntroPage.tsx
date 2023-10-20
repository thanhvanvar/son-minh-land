import Menu from "@/components/Menu";

export default function IntroPage() {
  return (
    <>
      <div className="bg-[#001a57]">
        <div className="container mx-auto md:w-[1170px] p-2 md:p-[90px] ">
          <div className="grid grid-cols-12 gap-4">
            <div className={`col-span-12`}>
              <div className="font-bold text-2xl leading-[40px] text-center uppercase text-white ">
                Về chúng tôi
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
