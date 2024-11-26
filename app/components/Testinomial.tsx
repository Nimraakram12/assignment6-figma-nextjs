import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

const Testimonials = () => {
  return (
    <section className="py-12 bg-[#f7f7f7]">
      <div className="container mx-auto px-4 max-w-[1280px]">
    
        <div className="text-start mb-8">
          <h2 className="text-[28px] md:text-[48px] font-bold">
            Customer Testimonials
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-4 bg-white border rounded-lg shadow-sm">
            <div className="flex mb-3">
              <span className="flex text-[14px] text-black gap-1">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
            </div>
            <p className="text-gray-600 text-[14px] md:text-[16px] leading-6 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
            <div className="flex items-center">
              <Image
                src="/images/Avatar Image 1.svg"
                alt="James Ndiku"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="text-[14px] md:text-[16px] font-bold">
                  James Ndiku
                </h4>
                <p className="text-gray-500 text-[12px] md:text-[14px]">
                  Software Developer
                </p>
              </div>
            </div>
          </div>

    
          <div className="p-4 bg-white border rounded-lg shadow-sm hidden sm:block lg:block">
            <div className="flex mb-3">
              <span className="flex text-[14px] text-black gap-1">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
            </div>
            <p className="text-gray-600 text-[14px] md:text-[16px] leading-6 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
            <div className="flex items-center">
              <Image
                src="/images/Avatar Image 2.svg"
                alt="Erick Kipkemboi"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="text-[14px] md:text-[16px] font-bold">
                  Erick Kipkemboi
                </h4>
                <p className="text-gray-500 text-[12px] md:text-[14px]">
                  Scrum Master
                </p>
              </div>
            </div>
          </div>


          <div className="p-4 bg-white border rounded-lg shadow-sm hidden lg:block">
            <div className="flex mb-3">
              <span className="flex text-[14px] text-black gap-1">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
            </div>
            <p className="text-gray-600 text-[14px] md:text-[16px] leading-6 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
            <div className="flex items-center">
              <Image
                src="/images/Avatar Image 3.svg"
                alt="Stephen Kerubo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="text-[14px] md:text-[16px] font-bold">
                  Stephen Kerubo
                </h4>
                <p className="text-gray-500 text-[12px] md:text-[14px]">
                  UI/UX Designer
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <span className="h-3 w-3 bg-gray-400 rounded-full mx-1"></span>
          <span className="h-3 w-3 bg-gray-700 rounded-full mx-1"></span>
          <span className="h-3 w-3 bg-gray-400 rounded-full mx-1"></span>
          <span className="h-3 w-3 bg-gray-400 rounded-full mx-1"></span>
          <span className="h-3 w-3 bg-gray-400 rounded-full mx-1"></span>
        </div>

        
        <div className="flex justify-center mt-6">
          <button className="p-3 mr-4 bg-white text-black rounded-full hover:bg-gray-400">
            <FaArrowLeft />
          </button>
          <button className="p-3 bg-white text-black rounded-full hover:bg-gray-400">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
