import React, { useState } from "react";
import Image from "next/image";
import location from "../public/images/location.png";
import Transition from "../components/Transition";
import phone from "../public/images/phone.png";
import { Button, message } from "antd";
import { sendContactForm } from "../lib/api";

const initValues = { name: "", email: "", message: "" };
const initState = { values: initValues };

const Contact = () => {
  const [formInput, setFormInput] = useState(initState);
  const [messageApi, contextHolder] = message.useMessage();

  const { values } = formInput;

  const handleChange = ({ target }) =>
    setFormInput((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e) => {
    e.preventDefault();

    setFormInput((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setFormInput(initState);
      messageApi.open({
        type: "success",
        content: "Message sent successfully",
      });
    } catch (error) {
      setFormInput((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <div
      id="contact"
      className="w-full py-20 flex flex-col bg-[#f3f6fc] footer-img sm:"
    >
      {contextHolder}
      <Transition>
        <h1 className="md:text-5xl text-3xl font-bold md:text-center p-4 mb-14">
          Get In Touch With Us
        </h1>
      </Transition>
      <Transition>
        <div className="mx-2">
          <div className="flex md:flex-row flex-wrap md:justify-center md:gap-x-[200px] flex-col">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <Image
                    src={location}
                    className="cursor-pointer"
                    alt="logo"
                    width={35}
                    height={35}
                  />
                  <h2 className="text-2xl font-bold ml-5">Address</h2>
                </div>
                <p className="text-lg mt-5 ml-10 mb-12">
                  750 N Saint Paul St Ste 250 <br></br> Dallas, Texas
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <Image
                    src={phone}
                    className="cursor-pointer"
                    alt="logo"
                    width={35}
                    height={35}
                  />
                  <h2 className="text-2xl font-bold ml-5">Call Us</h2>
                </div>
                <p className="text-lg ml-10 mb-12">+1(254) 472-4279</p>
              </div>
            </div>
            <div>
              <form className="md:w-[500px] w-full flex flex-col">
                <input
                  className="border shadow-lg p-3 my-2 rounded-lg"
                  type="text"
                  placeholder="Your Name"
                  value={values.name}
                  name="name"
                  onChange={handleChange}
                />

                <input
                  className="border shadow-lg p-3  my-2 rounded-lg"
                  type="email"
                  placeholder="E-mail Address"
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                />
                <textarea
                  className="border shadow-lg p-3  rounded-lg"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  value={values.message}
                  name="message"
                  onChange={handleChange}
                ></textarea>
                <div className="flex max-lg:justify-center">
                  <Button
                    style={{
                      background: "#3671E9",
                      color: "white",
                      "&:hover": {
                        background: "#3671F9",
                      },
                    }}
                    className="border shadow-lg p-4 w-[200px] h-16  text-lg font-bold rounded-full mt-10
                 "
                    onClick={onSubmit}
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Contact;
