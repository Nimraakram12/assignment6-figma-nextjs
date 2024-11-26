

import Courses from "./components/Courses";
import Services from "./components/Services";
import Team from "./components/Team";
import Image from "next/image";
import Link from "next/link";
import Testinomial from "./components/Testinomial";

const Home = () => {
  return (
    <>
    
      <div className="w-full flex flex-col md:flex-row px-4 md:px-10 lg:px-20 py-8">
      
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl md:text-[56px] font-bold leading-tight md:leading-[67.2px]">
            Learn new skills <br />
            online with ease
          </h1>

          <p className="mt-4 text-base md:text-lg leading-6 md:leading-7 md:w-[500px]">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>

          <div className="flex gap-4 mt-4">
  <Link
    href="/"
    className="w-[180px] text-sm md:text-lg text-center 
      border-2 p-2 bg-slate-900 text-white rounded-lg border-slate-900 flex items-center justify-center
      hover:bg-white hover:text-black"
  >
    Start Learning Now
  </Link>
  <Link
    href="/"
    className="w-[180px] text-sm md:text-lg text-center 
      border-2 p-2 rounded-lg border-slate-900 flex items-center justify-center
      hover:bg-slate-900 hover:text-white"
  >
    Explore Course
  </Link>
</div>

        </div>

      
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image
            src="/images/hero.svg"
            alt="Hero"
            width={640}
            height={900}
            className="w-full max-w-[400px] md:max-w-full"
          />
        </div>
      </div>

      
      <div className="w-full flex flex-col md:flex-row items-center bg-[#F7F7F7] px-4 md:px-10 lg:px-20 py-8">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center md:justify-start">
          <h2 className="font-bold text-2xl md:text-3xl text-center md:text-left leading-tight">
            Trusted by 2000+ companies worldwide
          </h2>
        </div>
        <div className="w-full md:w-2/3 flex flex-wrap justify-around gap-4">
          <Image
            src="/images/Airbnb Logo 1.svg"
            alt="AirbnbLogo1"
            width={100}
            height={40}
            className="w-[100px]"
          />
          <Image
            src="/images/Airbnb Logo2.svg"
            alt="AirbnbLogo2"
            width={100}
            height={40}
            className="w-[100px]"
          />
          <Image
            src="/images/Airbnb Logo3.svg"
            alt="AirbnbLogo3"
            width={100}
            height={40}
            className="w-[100px]"
          />
          <Image
            src="/images/Airbnb Logo4.svg"
            alt="AirbnbLogo4"
            width={100}
            height={40}
            className="w-[100px]"
          />
          <Image
            src="/images/Airbnb Logo 5.svg"
            alt="AirbnbLogo5"
            width={100}
            height={40}
            className="w-[100px]"
          />
          <Image
            src="/images/Airbnb Logo6.svg"
            alt="AirbnbLogo6"
            width={100}
            height={40}
            className="w-[100px] hidden md:block"
          />
        </div>
      </div>

      
      <Courses />

  
      <div className="w-full px-4 md:px-10 lg:px-20 py-10">
        <h2 className="font-bold text-2xl md:text-5xl text-center mb-6">
          Our Achievements
        </h2>
        <p className="text-sm md:text-base leading-6 md:leading-7 text-center mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">+200</h1>
            <span>Courses</span>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">50K</h1>
            <span>Mentors</span>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">370K</h1>
            <span>Students</span>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">100+</h1>
            <span>Recognition</span>
          </div>
        </div>
      </div>

    
      <Services />
      <Team />
      <Testinomial />
    </>
  );
}
export default Home;