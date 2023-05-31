import Image from "next/image";
import React, { useState } from "react";
import { AiFillAppstore, AiOutlineDollarCircle } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';
import { CgSupport } from 'react-icons/cg';
import { GiStarsStack } from 'react-icons/gi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { MdOutlineArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { RiAdminLine, RiShareForwardLine } from 'react-icons/ri';
import { TfiNewWindow } from 'react-icons/tfi';
import { Container } from "reactstrap";
import avatar from "../components/Data/Avatardata";



const AI = () => {
    const [image, setImage] = useState('')
    const [text, setText] = useState('')
    const [voice, setVoice] = useState('Kevin')
    let data = [];

    function handleSelectLanguage() {
        const select = document.getElementsByTagName("select")[0].value;
        fetch(`https://08ba-2400-adc1-401-a200-a19f-f21d-bc0b-370b.ngrok-free.app/?language=${select}`)
            .then(async function res(res) {
                data = await res.json();
            })
            .catch((e) => console.error(e));

        setTimeout(function timeoutHandler() {
            let arr = [];
            //when the document is finished loading, replace everything
            //between the <a ...> </a> tags with the value of splitText
            //console.log(
            //  data.Voices.filter(function filter(i) {
            //    return i.SupportedEngines.includes("neural");
            //  });

            // );

            for (let i = 0; i < data['Voices'].length; i++) {
                if (data['Voices'][i].SupportedEngines.includes("neural")) {
                    arr.push(data['Voices'][i]);
                }
            }

            let filteredData = arr
                .map((item) => {
                    return `<option value='${item.Id}'>${item.Name} (${item.Gender})</option>`;
                })
                .join("");

            document.getElementsByTagName("select")[1].innerHTML = filteredData;
        }, 1000);
    }

    function handleUserChange(e) {
        console.log(e.target.value);
        setVoice(e.target.value);
    }

    function inputChange(e) {
        console.log(e.target.value);
        setText(e.target.value);
    }

    function handleClick() {
        console.log(text, voice);
        if (text === "") return;
        else {
            fetch(`https://08ba-2400-adc1-401-a200-a19f-f21d-bc0b-370b.ngrok-free.app/?language=null&text=${text}&voice=${voice}`)
                .then(async function res(res) {
                    data = await res.blob();
                    // console.log(await res.blob())
                })
                .catch((e) => console.error(e));

            setTimeout(function timeoutHandler() {
                try {
                    console.log(data)
                    let audio = document.createElement("audio");
                    const sourceTag = document.createElement("source");
                    audio.autoplay = true;
                    sourceTag.src = URL.createObjectURL(data)
                    sourceTag.type = data.type
                    audio.appendChild(sourceTag)
                    document.getElementsByTagName('body')[0].appendChild(audio);
                } catch (error) {
                    console.error(error.message)
                }
            }, 1500);
        }
    }

    return (
        <>
            <Container className="md:px-20 py-20 mx-2 ">

                <div className="flex justify-between  mb-[20px] ">
                    <div className="flex w-[20%] flex-col bg-black text-white px-6  gap-y-8  ">
                        <div className="flex  pt-20 gap-x-2">
                            <BsPlusCircle size={30} />
                            <p className="text-[#D8D8D8] text-[20px] font-serif cursor-pointer">Create Video</p>
                        </div>
                        <div className="flex  gap-x-2">
                            <AiFillAppstore size={30} />
                            <p className="text-[#D8D8D8] text-[20px] font-serif cursor-pointer">Video Library</p>
                        </div>
                        <div className="h-[2px] w-full bg-[#FFFFFF] "></div>
                        <div className="flex  gap-x-2">
                            <HiOutlineDocumentText size={30} className="text-white" />
                            <p className="text-[#D8D8D8] text-[20px] font-serif cursor-pointer">API Documentation</p>
                        </div>
                        <div className="flex  gap-x-2">
                            <CgSupport size={30} />
                            <p className="text-[#D8D8D8] text-[20px] font-serif cursor-pointer">Support</p>
                        </div>
                        <div className="h-[1px] w-full bg-[#FFFFFF] "></div>
                        <div className="flex  gap-x-2">
                            <AiOutlineDollarCircle size={30} />
                            <p className="text-[#D8D8D8] text-[20px] font-serif cursor-pointer">Pricing</p>
                        </div>
                        <div className="flex pt-6 gap-x-2">
                            <TfiNewWindow size={30} />
                            <p className="text-[#D8D8D8] text-[20px] font-serif cursor-pointer">New in Cubic </p>
                        </div>
                        <div className="flex justify-between pb-4 gap-x-1">
                            <div></div>
                            <div className="bg-[gray] rounded-full p-2">
                                <RiShareForwardLine size={30} />
                            </div>
                        </div>



                    </div>

                    <div className="w-[40%] flex flex-col bg-[#FFFFFF] px-8 py-6 rounded-[18px]">
                        <div className="text-[22px]  ">Untitled Video </div>
                        <div className="flex justify-center items-center pb-[30px] h-[40%]">{image && <Image src={image} alt='fund' height={200} width={200} className="rounded-full" />}</div>
                        <div className="h-[50%] overflow-y-scroll scrollstyle relative">
                            <div className="flex gap-x-6 pb-[8px] bg-white sticky z-20 top-0">
                                <div className="flex gap-x-2">
                                    <div > <RiAdminLine /> </div>
                                    <div className="text-[14px] cursor-pointer hover:border-b-2 hover:border-b-[#000000]">
                                        Choose a Presenter
                                    </div>
                                </div>
                                <div className="flex gap-x-2">
                                    <div > <GiStarsStack /> </div>
                                    <div className="text-[14px] cursor-pointer hover:border-b-2 hover:border-b-[#000000]">
                                        Choose a Presenter
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-x-4 gap-y-6 grid-cols-5 ">

                                {avatar.map((item, idx) => (
                                    <>

                                        <div className=" border-[4px] cursor-pointer border-[#dad8d8] rounded-full p-[4px] flex items-center hover:border-[#19dce0] ">
                                            <Image src={item.image} width={100} height={100} onClick={() => setImage(item.image)} alt="fund" className="rounded-full" />
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[25%] flex-col bg-[#f1f2f6ba] px-4 py-6 rounded-[8px] ">
                        <div className="flex pb-[24px]">
                            <MdOutlineKeyboardArrowLeft size={30} color="grey" />
                            <p className="text-[#212529] text-[20px] font-serif">Text To Speech</p>
                        </div>
                        <p className="text-[13px] text-[#5C5E65] pb-[8px]">Language</p>
                        <div className="flex items-center px-4 py-2  border-2 border-[#F7F7F8] rounded-[8px] mb-[24px]">
                            <select className="w-full flex justify-between border-0"
                                onChange={handleSelectLanguage}>
                                <option value="en-US">English US</option>
                                <option value="en-IN">English IN</option>
                                <option value="es-MX">English MX</option>
                                <option value="en-ZA">English ZA</option>
                                <option value="tr-TR">Tr</option>
                                <option value="ru-RU">Russian</option>
                                <option value="ro-RO">Russian2</option>
                                <option value="pt-PT">pt-PT</option>
                                <option value="pl-PL">pl-PL</option>
                                <option value="nl-NL">nl-NL</option>
                                <option value="it-IT">it-IT</option>
                                <option value="is-IS">is-IS</option>
                                <option value="fr-FR">fr-FR</option>
                                <option value="es-ES">es-ES</option>
                            </select>
                        </div>
                        <p className="text-[13px] text-[#5C5E65] pb-[8px]">Voice</p>
                        <div className="flex items-center px-4 py-2 border-2 border-[#F7F7F8] rounded-[8px] mb-[24px]">
                            <select name="cars" id="cars" className="w-full flex justify-between "
                                onChange={handleUserChange}>
                                <option value="Kevin">Kevin (Male)</option>
                                <option value="Salli">Salli (Female)</option>
                                <option value="Matthew">Matthew (Male)</option>
                                <option value="Kimberly">Kimberly (Female)</option>
                                <option value="Kendra">Kendra (Female)</option>
                                <option value="Justin">Justin (Male)</option>
                                <option value="Joey">Joey (Male)</option>
                                <option value="Joanna">Joanna (Female)</option>
                                <option value="Ivy">Ivy (Female)</option>
                                <option value="Ruth">Ruth (Female)</option>
                                <option value="Stephen">Stephen (Male)</option>
                            </select>
                        </div>
                        <p className="text-[13px] text-[#5C5E65] pb-[8px]">Text</p>

                        <div className="mb-[24px]">
                            <textarea
                                className="p-3 bg-[#FFFFFF] rounded-lg"
                                cols="30"
                                rows="6"
                                placeholder="Message"
                                onChange={inputChange}
                                name="message"
                            ></textarea>
                        </div>
                        <div className="bg-[#EEEEF0] cursor-pointer flex justify-between items-center px-4 py-2 rounded-[8px]"
                            onClick={handleClick}>
                            <div>Preview</div>
                            <div><MdOutlineArrowRight size={40} /></div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default AI;
