import React from "react";
import Image from "next/image";
import Link from "next/link";
const Services=()=> {
  return (
    <>
      <div className="w-full mt-6 md:mt-0 p-3 py-20 md:p-6">
        <h2 className="font-bold leading-[35px] md:leading-[57.6px] text-xl md:text-5xl text-center">
          Courses
        </h2>
        <p className="text-lg leading-[27px] text-center">
          Your Ultimate Guide to Learning
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-around mb-12">
        <div className="w-full md:w-[416px] border bg-[#f7f7f7]">
          <Image
            src={"/images/Image 1.svg"}
            alt="blog1"
            width={100}
            height={100}
            className="w-full p-3"
          />
          <div className="p-6 pt-0">
            <div className="flex w-full justify-between">
              <h5>Design</h5>
              <span className="flex">
                <Image
                  src={"/images/Star 1.svg"}
                  alt="Star 1"
                  width={100}
                  height={100}
                  className="w-6 "
                />
                5.0
              </span>
            </div>

            <h5 className="text-base font-bold leading-[33.6px]">
              UX/UI Design 201
            </h5>
            <p className="text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>

          <div className="w-1/2 p-2 mt-4 fade-up flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center justify-center border-2 border-slate-900 
    hover:bg-slate-900 hover:text-white w-[117px] h-[40px]"
            >
              Enroll Now
            </Link>
            <p>$400</p>
          </div>
        </div>
        <div className="w-full md:w-[416px] border bg-[#f7f7f7]">
          <Image
            src={"/images/Image 2.svg"}
            alt="blog2"
            width={100}
            height={100}
            className="w-full p-3"
          />
          <div className="p-6 pt-0">
            <div className="flex w-full justify-between">
              <h5>Programming</h5>
              <span className="flex">
                <Image
                  src={"/images/Star 1.svg"}
                  alt="Star 1"
                  width={100}
                  height={100}
                  className="w-6 "
                />
                5.0
              </span>
            </div>

            <h5 className="text-base font-bold leading-[33.6px]">
            Introduction to Python
            </h5>
            <p className="text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>

          <div className="w-1/2 p-2 mt-4 fade-up flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center justify-center border-2 border-slate-900 
    hover:bg-slate-900 hover:text-white w-[117px] h-[40px]"
            >
              Enroll Now
            </Link>
            <p>$400</p>
          </div>
        </div>

        <div className="w-full md:w-[416px]  border bg-[#f7f7f7]">
          <Image
            src={"/images/Image 3.svg"}
            alt="blog3"
            width={100}
            height={100}
            className="w-full p-3"
          />
          <div className="p-6 pt-0">
            <div className="flex w-full justify-between">
              <h5>Business</h5>
              <span className="flex">
                <Image
                  src={"/images/Star 1.svg"}
                  alt="Star 1"
                  width={100}
                  height={100}
                  className="w-6 "
                />
                5.0
              </span>
            </div>

            <h5 className="text-base font-bold leading-[33.6px]">
            Data Analysis for Beginners
            </h5>
            <p className="text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>

          <div className="w-1/2 p-2 mt-4 fade-up flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center justify-center border-2 border-slate-900 
    hover:bg-slate-900 hover:text-white w-[117px] h-[40px]"
            >
              Enroll Now
            </Link>
            <p>$400</p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex justify-around">
        <div className="w-full md:w-[416px]  border bg-[#f7f7f7]">
          <Image
            src={"/images/Image 4.svg"}
            alt="blog4"
            width={100}
            height={100}
            className="w-full p-3"
          />
          <div className="p-6 pt-0">
            <div className="flex w-full justify-between">
              <h5>Art</h5>
              <span className="flex">
                <Image
                  src={"/images/Star 1.svg"}
                  alt="Star 1"
                  width={100}
                  height={100}
                  className="w-6 "
                />
                5.0
              </span>
            </div>

            <h5 className="text-base font-bold leading-[33.6px]">
            Art Specialization
            </h5>
            <p className="text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>

          <div className="w-1/2 p-2 mt-4 fade-up flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center justify-center border-2 border-slate-900 
    hover:bg-slate-900 hover:text-white w-[117px] h-[40px]"
            >
              Enroll Now
            </Link>
            <p>$400</p>
          </div>
        </div>
        <div className="w-full md:w-[416px]  border bg-[#f7f7f7]">
          <Image
            src={"/images/Image 5.svg"}
            alt="blog5"
            width={100}
            height={100}
            className="w-full p-3"
          />
          <div className="p-6 pt-0">
            <div className="flex w-full justify-between">
              <h5>Law</h5>
              <span className="flex">
                <Image
                  src={"/images/Star 1.svg"}
                  alt="Star 1"
                  width={100}
                  height={100}
                  className="w-6 "
                />
                5.0
              </span>
            </div>

            <h5 className="text-base font-bold leading-[33.6px]">
            Rule of Law
            </h5>
            <p className="text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>

          <div className="w-1/2 p-2 mt-4 fade-up flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center justify-center border-2 border-slate-900 
    hover:bg-slate-900 hover:text-white w-[117px] h-[40px]"
            >
              Enroll Now
            </Link>
            <p>$400</p>
          </div>
        </div>

        <div className="w-full md:w-[416px]  border bg-[#f7f7f7]">
          <Image
            src={"/images/Image 6.svg"}
            alt="blog6"
            width={100}
            height={100}
            className="w-full p-3"
          />
          <div className="p-6 pt-0">
            <div className="flex w-full justify-between">
              <h5>Tech</h5>
              <span className="flex">
                <Image
                  src={"/images/Star 1.svg"}
                  alt="Star 1"
                  width={100}
                  height={100}
                  className="w-6 "
                />
                5.0
              </span>
            </div>

            <h5 className="text-base font-bold leading-[33.6px]">
            Introduction to webflow
            </h5>
            <p className="text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>

          <div className="w-1/2 p-2 mt-4 fade-up flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center justify-center border-2 border-slate-900 
    hover:bg-slate-900 hover:text-white w-[117px] h-[40px]"
            >
              Enroll Now
            </Link>
            <p>$400</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
