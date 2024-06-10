import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { CgShoppingCart, CgArrowsExchange } from "react-icons/cg";
import Image from "next/image";
import  Featured1 from "../../public/assests/Featured1.webp";
import  Featured2 from "../../public/assests/Featured2.webp";
import  Featured3  from "../../public/assests/Featured3.webp";
import  Featured4  from "../../public/assests/Featured4.webp";
import  header  from "../../public/assests/header.webp";


const Hero = () => {
  return (
    <header className="header lg:top-10 top-0 flex flex-col lg:flex-row items-center lg:items-start">
      <div className="header-left-side flex-1">
        <div className="header-content flex flex-col items-center lg:items-start">
          <Button className="btn w-fit h-fit mb-4 items-center">
            <CgArrowsExchange className="mr-2 h-6 " /> <h3 className="">We are offering 70% Off
            sell on Special products</h3>
          </Button>
          <h1 className="text-center lg:text-left text-3xl lg:text-5xl font-bold mb-4">
            An Industrial Take on Streetwear
          </h1>
          <p className="text-center lg:text-left mb-4">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Link
            href={"/products"}
            className="bg-black mt-4 text-white w-fit flex px-6 py-3"
          >
            <ShoppingCart className="mr-4" />
            Start Shopping
          </Link>
        </div>

        <div className="header-featured flex flex-wrap justify-center lg:justify-start gap-4 lg:mt-10 mt-10">
          <Image src={Featured1} width={150} height={135} alt="Feature 1" />
          <Image src={Featured2} width={150} height={135} alt="Feature 2" />
          <Image src={Featured3} width={150} height={135} alt="Feature 3" />
          <Image src={Featured4} width={150} height={135} alt="Feature 4" />
        </div>
      </div>
      <div className="header-right-side hidden lg:flex flex-1 justify-center items-center ">
        <div className="header-circle ">
          <Image
            className="header-img "
            src={header}
            width={650}
            height={650}
            alt="Header Image"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
