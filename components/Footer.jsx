import React from "react";
import Link from "next/link";
import Image from "next/image";
import github from "../public/images/Github.svg";
import linkedIn from "../public/images/Linkedin.svg";
import discord from "../public/images/Discord.svg";
import telegram from "../public/images/Telegram.svg";
import logo from "../public/images/logo.png";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { ImDribbble } from "react-icons/im";

const Footer = () => {
  return (
    <section className="md:px-28 py-20 bg-[#ffffff] w-full h-full flex flex-col footer-img">
      <div className="flex flex-row justify-center max-lg:flex-col max-lg:gap-y-[15px] max-lg:px-[10px]">
        <div className="text-[#808291] font-medium flex">
          © Copyright 2023, All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
