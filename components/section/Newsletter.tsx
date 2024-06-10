import Link from "next/link";

const Newsletter = () => {
    return (
      <div className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Subscribe Our Newsletter</h2>
          <p className="mb-6">Get the latest information and promo offers directly</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Input email address"
              className="px-4 py-2 border border-gray-300 rounded-l-md"
            />
            <Link href={"/"} className="px-6 py-2 bg-black text-white font-bold rounded-r-md">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Newsletter;
  