import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div>
        <div className="mt-10 md:mt-32 w-full flex flex-col md:flex-row justify-between p-8">
        <div>
          <h5 className="text-lg leading-[27px] font-semibold">
            Subscribe to our newsletter
          </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <div className="w-full md:w-[400px] mb-4 flex flex-col md:flex-row justify-around">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full md:w-2/3 p-2 mt-4 mb-10 md:mt-0 md:mb-0 rounded-lg border-2 
            border-slate-900"
            />
            <button>
              <Link
                href="/"
                className="w-full md:w-[80px] text-center border-2 p-2 rounded-lg 
                border-slate-900 hover:bg-slate-900 hover:text-white"
              >
                Subscribe
              </Link>
            </button>
          </div>
          <p>By subscribing you agree to with our Privacy Policy</p>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-around p-8">
        <div className="w-full md:w-1/4">
          <Link href="/">
            <Image
              src={"/images/logo.svg"}
              alt="Logo"
              width={130}
              height={41}
              className="w-3/4 md:w-[130px] flex justify-center items-center"
            />
          </Link>
        </div>

        <div className="w-full md:w-1/4 flex flex-col text-center mt-6 md:mt-0">
          <ul className="flex flex-col">
          <strong>Courses</strong>
            <Link href="/" className="pt-4">
              Business
            </Link>
            <Link href="/" className="pt-4">
              Development
            </Link>
            <Link href="/" className="pt-4">
              Technology
            </Link>
            <Link href="/" className="pt-4">
              Design
            </Link>
            <Link href="/" className="pt-4">
              Programming
            </Link>
          </ul>
        </div>

        <div className="w-full md:w-1/4 flex flex-col text-center mt-6 md:mt-0">
          <ul className="flex flex-col">
          <strong>Resources</strong>
            <Link href="/" className="pt-4">
              Career
            </Link>
            <Link href="/" className="pt-4">
              Resume
            </Link>
            <Link href="/" className="pt-4">
              Learning
            </Link>
            <Link href="/" className="pt-4">
              Interview Preparation
            </Link>
            <Link href="/" className="pt-4">
              Jobs
            </Link>
          </ul>
        </div>

        <div className="w-full md:w-1/4 flex flex-col text-center mt-6 md:mt-0">
          <ul className="flex flex-col">
          <strong>About Us</strong>
            <Link href="/" className="pt-4">
              Contact
            </Link>
            <Link href="/" className="pt-4">
              Help/Support
            </Link>
            <Link href="/" className="pt-4">
              FAQ
            </Link>
            <Link href="/" className="pt-4">
              Terms and Condition
            </Link>
            <Link href="/" className="pt-4">
              Partners
            </Link>
          </ul>
        </div>
      </div>

      <Image
        src={"/images/Divider.svg"}
        alt="Logo"
        width={130}
        height={41}
        className="w-full p-8"
      />

<div className="w-full p-8 pt-0 flex flex-col md:flex-row justify-between">

  <div className="w-full md:w-2/4 flex flex-col md:flex-row justify-around text-center mb-8 md:mb-0">
    <p className="text-sm">2024 Ddsgnr. All rights reserved.</p>
    <Link href="/" className="pt-4 md:pt-0 text-sm">Privacy Policy</Link>
    <Link href="/" className="pt-4 md:pt-0 text-sm">Terms of Services</Link>
    <Link href="/" className="pt-4 md:pt-0 text-sm">Cookies Settings</Link>
  </div>

  
  <div className="flex items-center justify-center md:justify-end space-x-4">
    <img
      src="/images/Facebook 1.svg"
      alt="Facebook"
      className="w-6 h-6"
    />
    <img
      src="/images/instagram.svg"
      alt="Instagram"
      className="w-6 h-6"
    />
    <img
      src="/images/Twitter.svg"
      alt="Twitter"
      className="w-6 h-6"
    />
    <img
      src="/images/LinkedIn.svg"
      alt="LinkedIn"
      className="w-6 h-6"
    />
  </div>
</div>
</div>
  )
}

export default Footer;