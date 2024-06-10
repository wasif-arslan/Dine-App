import Image from "next/image";
import feature from "../../public/feature.webp";
import Link from "next/link";

const Unique = () => {
  return (
    <div className="md:pr-16 md:pl-16">
      <div className="container mx-auto px-4">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side with text background */}
          <div className="relative flex flex-col justify-center">
            <div className="absolute inset-0 font-extrabold  text-[80px] md:text-7xl lg:text-8xl xl:text-9xl text-[#efeff3] opacity-70 z-0 flex items-center justify-center lg:justify-start">
              Different from others
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Using Good Quality Materials
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  100% Handmade Products
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Modern Fashion Design
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Discount for Bulk Orders
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          {/* Right side with image and text */}
          <div className="flex flex-col lg:flex-row gap-5 items-center lg:items-start">
            <Image
              src={feature}
              alt="Jewellery"
              width={400}
              height={400}
              className="object-cover"
            />
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">
                Unique and Authentic Vintage Designer Jewellery
              </h2>
              <p className="mb-6">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <Link
                href="/products"
                className="bg-black text-white px-6 py-3 inline-block "
              >
                See All Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
