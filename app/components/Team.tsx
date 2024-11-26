import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <div className=' py-52'>
        <div className="w-full mb-10 mt-6 md:mt-0 p-3 md:p-6">
        <h2 className="font-bold leading-[35px] md:leading-[57.6px] text-4xl md:text-5xl text-center">
          Our team
        </h2>
        <p className="text-lg leading-[27px] text-justify md:text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>
      </div>

      <div className="w-full mt-10 p-2 md:p-0 flex flex-col md:flex-row justify-between">
        <div className="w-full mt-10 md:mt-0 md:w-[410.67px] h-[132px] flex flex-col justify-center items-center">
          <Image
            src={"/images/team 1.svg"}
            alt="team1"
            width={70}
            height={40}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-[20px] font-semibold leading-[30px]">
            James Nduku
            </h5>
            <p className="text-lg leading-[27px]">Marketing Coordinator</p>

            <div className="flex mt-6">
            <Image
            src={"/images/LinkedIn.svg"}
            alt="LinkedIn"
            width={40}
            height={30}
            className="p-2"
          />
          <Image
            src={"/images/Twitter.svg"}
            alt="Twitter"
            width={40}
            height={30}
            className="p-2"
          />
          <Image
            src={"/images/Vector.svg"}
            alt="Dribble"
            width={40}
            height={30}
            className="p-2"
          />
            </div>
          </div>
        </div>

        <div className="w-full mt-32 md:mt-0 md:w-[410.67px] h-[132px] flex flex-col justify-center items-center">
          <Image
            src={"/images/team 2.svg"}
            alt="team2"
            width={70}
            height={40}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-[20px] font-semibold leading-[30px]">
            Joseph Munyambu
            </h5>
            <p className="text-lg leading-[27px]">Nursing Assistant</p>
            <div className="flex mt-6">
            <Image
            src={"/images/LinkedIn.svg"}
            alt="LinkedIn"
            width={40}
            height={30}
            className="p-2"
          />
          <Image
            src={"/images/Twitter.svg"}
            alt="Twitter"
            width={40}
            height={30}
            className="p-2"
          />
          <Image
            src={"/images/Vector.svg"}
            alt="Dribble"
            width={40}
            height={30}
            className="p-2"
          />
            </div>

          </div>
        </div>

        <div className="w-full mt-32 md:mt-0 md:w-[410.67px] h-[132px] flex flex-col justify-center items-center">
          <Image
            src={"/images/team 3.svg"}
            alt="team3"
            width={70}
            height={40}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-[20px] font-semibold leading-[30px]">
            Joseph Ngumbau
            </h5>
            <p className="text-lg leading-[27px]">Medical Assistant</p>
            <div className="flex mt-6">
            <Image
            src={"/images/LinkedIn.svg"}
            alt="LinkedIn"
            width={40}
            height={30}
            className="p-2"
          />
          <Image
            src={"/images/Twitter.svg"}
            alt="Twitter"
            width={40}
            height={30}
            className="p-2"
          />
          <Image
            src={"/images/Vector.svg"}
            alt="Dribble"
            width={40}
            height={30}
            className="p-2"
          />
            </div>
          </div>
        </div>
</div>

<div className="w-full mt-32 p-2 md:p-0 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[410.67px] h-[132px] flex flex-col justify-center items-center">
          <Image
            src={"/images/team 4.svg"}
            alt="team4"
            width={70}
            height={40}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-[20px] font-semibold leading-[30px]">
            Erick Kipkemboi
            </h5>
            <p className="text-lg leading-[27px]">Web Designer</p>

            <div className="flex mt-6">
            <Image
            src={"/images/LinkedIn.svg"}
            alt="LinkedIn"
            width={40}
            height={30}
            className="p-2"
          />
          <Image
            src={"/images/Twitter.svg"}
            alt="Twitter"
            width={40}
            height={30}
            className="p-2"
          />
          <Image
            src={"/images/Vector.svg"}
            alt="Dribble"
            width={40}
            height={30}
            className="p-2"
          />
            </div>
          </div>
        </div>

        <div className="w-full md:w-[410.67px] h-[132px] hidden md:flex flex-col justify-center items-center">
          <Image
            src={"/images/team 5.svg"}
            alt="team5"
            width={70}
            height={40}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-[20px] font-semibold leading-[30px]">
            Stephen Kerubo
            </h5>
            <p className="text-lg leading-[27px]">President of Sales</p>
            <div className="flex mt-6">
            <Image
            src={"/images/LinkedIn.svg"}
            alt="LinkedIn"
            width={40}
            height={30}
            className="p-2"
          />
          <Image
            src={"/images/Twitter.svg"}
            alt="Twitter"
            width={40}
            height={30}
            className="p-2"
          />
          <Image
            src={"/images/Vector.svg"}
            alt="Dribble"
            width={40}
            height={30}
            className="p-2"
          />
            </div>

          </div>
        </div>

        <div className="w-full md:w-[410.67px] h-[132px] hidden md:flex flex-col justify-center items-center">
          <Image
            src={"/images/team 6.svg"}
            alt="team6"
            width={70}
            height={40}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-[20px] font-semibold leading-[30px]">
            John Leboo
            </h5>
            <p className="text-lg leading-[27px]">Dog Trainer</p>
            <div className="flex mt-6">
            <Image
            src={"/images/LinkedIn.svg"}
            alt="LinkedIn"
            width={40}
            height={30}
            className="p-2"
          />
          <Image
            src={"/images/Twitter.svg"}
            alt="Twitter"
            width={40}
            height={30}
            className="p-2"
          />
          <Image
            src={"/images/Vector.svg"}
            alt="Dribble"
            width={40}
            height={30}
            className="p-2"
          />
            </div>
          </div>
        </div>
</div>
    </div>
  )
}

export default Team;