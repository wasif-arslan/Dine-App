import Image from "next/image";
import Image1 from "../../public/event1.webp";
import Image2 from "../../public/event2.webp";
import Image3 from "../../public/event3.webp";

const Promotions = () => {
  return (
    <div className="py-8 lg:mt-20">
      <p className="leading-4 text-center text-[#0062f5] tracking-widest m-6 font-bold text-[14px]">
        Our Promotions Events
      </p>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="lg:w-2/3 w-full">
          <div className="bg-gray-200 p-5 flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left text-black">
              <h3 className="text-xl font-bold">GET UP TO 60%</h3>
              <h1>For the summer season</h1>
            </div>
            <Image
              src={Image1}
              alt="GET UP TO 60%"
              width={370}
              height={394}
              className="mt-5 lg:mt-0"
            />
          </div>
          <div className="bg-black p-10 flex items-center justify-center mt-5">
            <div className="text-center text-white space-y-2">
              <h3 className="text-4xl font-bold">GET 30% Off</h3>
              <p className="text-xl font-bold">USE PROMO CODE</p>
              <p className="mt-2 font-mono bg-gray-800 text-white inline-block px-2 py-1">
                DINEWEEKENDSALE
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full flex flex-col lg:flex-row gap-5">
          <div className="bg-gray-100 pt-4 pl-4 pr-4 flex flex-col ">
            <div className="text-center text-black">
              <h3 className="text-xl font-bold">Flex Sweatshirt</h3>
              <p className="line-through">$100.00</p>
              <p className="text-red-600 font-bold">$75.00</p>
            </div>
            <Image
              src={Image2}
              alt="Flex Sweatshirt"
              width={370}
              height={394}
              className="mt-16"
            />
          </div>
          <div className="bg-gray-200 pt-4 pl-4 pr-4 flex flex-col ">
            <div className="text-center text-black">
              <h3 className="text-xl font-bold">Flex Push Button Bomber</h3>
              <p className="line-through">$225.00</p>
              <p className="text-red-600 font-bold">$190.00</p>
            </div>
            <Image
              src={Image3}
              alt="Flex Push Button Bomber"
              width={370}
              height={394}
              className="mt-8 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
