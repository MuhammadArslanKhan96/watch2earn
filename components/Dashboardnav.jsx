import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { useRouter } from "next/router";

const Dashboardnav = () => {
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

    // window.addEventListener("scroll", changeColor);
  }, []);

  // if (router.pathname === "/Userdashboard" || "/Youtubeservices") return;
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="w-auto mx-8 bg-[black] lg:px-28 flex justify-center items-center py-2 text-white">
        <div className="flex ">
          <ul style={{ color: `${textColor}` }} className="hidden lg:flex">
            <li className="py-4 px-9 text-[#ffffffec] font-bold text-[24px]">
              <Link href="#">Profile</Link>
            </li>

            <li className="py-4 px-9 text-[#ffffffec] font-bold text-[24px]">
              <Link href="#">Analytics</Link>
            </li>

            <li className="py-4 px-9 text-[#ffffffec] font-bold text-[24px]">
              <Link href="#">Spending</Link>
            </li>
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
              <Link href="/#work">Profile</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-[#0D1296] hover:text-gray-500"
            >
              <Link href="/#services">Analytics</Link>
            </li>

            <li
              onClick={handleNav}
              className="p-4 text-4xl text-[#0D1296] hover:text-gray-500"
            >
              <Link href="/#contact">Spending</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboardnav;
