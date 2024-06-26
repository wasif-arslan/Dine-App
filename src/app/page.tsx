import Hero from "@/components/section/Hero";
import Newsletter from "@/components/section/Newsletter";
import Product from "@/components/section/Product";
import Promotions from "@/components/section/Promotions";
import Unique from "@/components/section/Unique";
import UserInfo from "@/components/userInfo";

export default async function Home() {
  return (
    <div className="lg:px-20 px-10 ">
      {/* clert sugnOut button */}
      <UserInfo greeting="Hey" msg={"I hope you're fine and doing very well"} />
      {/** hero section */}
      <Hero />
      <Promotions/>
      <Product/>
      <Unique/>
      <Newsletter/>
    </div>
  );
}
