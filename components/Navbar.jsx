import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { useRouter } from "next/router";

const Navbar = () => {
  const { status } = useSession();
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };
  const router = useRouter();
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };

    window.addEventListener("scroll", changeColor);
  }, []);

  if (router.pathname === "/Userdashboard") return;
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="w-auto mx-8 lg:px-28 flex justify-between items-center py-4 text-white">
        <div className="flex">
          <div>
            <Link href="/">
              <Image
                src={logo}
                className="cursor-pointer"
                alt="logo"
                width={60}
                height={55}
              />
            </Link>
          </div>
          {/*  */}
          <div
            className="px-1 text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#c132d1] to-[#0E9AC5]
         font-sans font-bold"
          >
            Cubicus
          </div>
        </div>
        <div className="flex">
          <ul style={{ color: `${textColor}` }} className="hidden lg:flex">
            <li className="p-4 text-[#0D1296] font-bold">
              <Link href="/#projects ">Work</Link>
            </li>
            <li className="p-4 text-[#0D1296] font-bold">
              <Link href="/#services">Services</Link>
            </li>
            {/* <li className="p-4 text-[#0D1296] font-bold">
              <Link href="/AI">Speech</Link>
            </li> */}
            <li className="p-4 text-[#0D1296] font-bold">
              <Link href="/Youtubeservices">Youtube services</Link>
            </li>
            <li
              className={
                "p-4 text-[#0D1296] font-bold "
                // (status === "authenticated"
                //   ? "cursor-pointer"
                //   : "cursor-not-allowed")
              }
            >
              <Link
                // style={{
                //   cursor:
                //     status === "authenticated" ? "pointer" : "not-allowed",
                // }}
                href={
                  status === "authenticated"
                    ? "/Videodashboard"
                    : "/Videodashboard"
                }
              >
                Video Dashboard
              </Link>
            </li>

            <li className="p-4 text-[#0D1296] font-bold">
              <Link href="/Userdashboard">User</Link>
            </li>
            <li className="p-4 text-[#0D1296] font-bold">
              <Link href="/#contact ">Contact</Link>
            </li>
            <li className="p-4 text-[#0D1296] font-bold">
              <div className="flex items-center text-[#0D1296] cursor-pointer">
                <div>
                  <FiPhoneCall />
                </div>
                <div className="px-2">+1(254) 472-4279</div>
              </div>
            </li>

            <Link href="https://calendly.com/m-arslan2201/call-with-cubicus?month=2023-03">
              <button className="bg-[#0d1296] border rounded-[5px] text-white text-lg font-bold px-4 ">
                Get a quote
              </button>
            </Link>
          </ul>
        </div>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block lg:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `#0D1296` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `#0D1296` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#e9f1fc] text-center ease-in duration-300"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-[#0D1296] hover:text-gray-500"
            >
              <Link href="/#work">Work</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-[#0D1296] hover:text-gray-500"
            >
              <Link href="/#services">Services</Link>
            </li>
            {/* <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#testimonials'>Testimonials</Link>
            </li> */}
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-[#0D1296] hover:text-gray-500"
            >
              <Link href="/#contact">Contact</Link>
            </li>
            <Link href="https://calendly.com/m-arslan2201/call-with-cubicus?month=2023-03">
              <button className="bg-[#0D1296] text-[#fff]  text-lg font-bold px-4">
                Get a quote
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
