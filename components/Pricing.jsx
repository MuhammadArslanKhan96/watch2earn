import React from "react";
import Image from 'next/image'
import mark from '../public/images/circle-check.svg'

const Footer = () => {
    const AdvanceDesign = [
        {
            AdvanceDesign: "Dedicated Product Designer",
        },
        {
            AdvanceDesign: "Multiple Projects",
        },
        {
            AdvanceDesign: "Real-time Collaboration on Slack / Microsoft Teams",
        },
        {
            AdvanceDesign: "Daily Updates",
        },
        {
            AdvanceDesign: "No contracts - Pause or cancel anytime",
        },
    ];
    const AdvanceCombo = [
        {
            AdvanceCombo: "Dedicated Product Designer",
        },
        {
            AdvanceCombo: "Dedicated Frontend Engineer ( Vue.js, Angular.Js, React.js )",
        },
        {
            AdvanceCombo: "Multiple Projects",
        },
        {
            AdvanceCombo: "Real-time Collaboration on Slack / Microsoft Teams",
        },
        {
            AdvanceCombo: "Daily Updates",
        },
        {
            AdvanceCombo: "No contracts - Pause or cancel anytime",
        },
    ];
    const AdvanceFrontend = [
        {
            AdvanceFrontend: "Dedicated Frontend Engineer ( Vue.js, Angular.Js, React.js )",
        },
        {
            AdvanceFrontend: "Multiple Projects",
        },
        {
            AdvanceFrontend: "Real-time Collaboration on Slack / Microsoft Teams",
        },
        {
            AdvanceFrontend: "Daily Updates",
        },
        {
            AdvanceFrontend: "No contracts - Pause or cancel anytime",
        },
    ];
  return (
    <section id="pricing" className="px-28 py-36 bg-[#f3f6fc] w-full flex flex-col">
        <h1 className="text-black text-5xl mb-6 font-medium">Flat & Simple Monthly Pricing</h1>
        <p className="text-xl text-black w-[800px] mb-10">
            No hidden costs, no hiring cost, just pay only for the pure work. Save thousands with
            our Simple and Flat Monthly Pricing. All Plans comes up with a 7 days money back
            guarantee, no questions asked.
        </p>
        <div className="flex flex-row justify-between w-full gap-8 items-center">
            <div className="px-8 py-6 w-full  h-[700px] rounded-xl bg-transparent border-solid border-[1px] border-[#f3f6fc]-500">
                <button className="bg-transparent mb-4 border-solid border-[1px] border-[#3445E0] text-[#3445E0] font-semibold text-lg px-5  py-2 rounded">
                    Advance Design 
                </button>
            <h2 className="text-black text-2xl mb-5">
                Product Design<br></br>
                as a Service
            </h2>
            <h2 className="text-black text-2xl mb-5">
                $3799 /mo
            </h2>
            <div className= "border-solid border-[1px] border-[#f3f6fc]-500 w-full mb-5" ></div>
            {AdvanceDesign.map((item) => (
                                <>
                                    <div className="FlexRow py-1">
                                        <Image
                                            src={mark}
                                            className='object-contain h-4 w-4'
                                            alt=''
                                        />
                                        <span className='text-lg text-[#4A4D55] ml-2'>
                                            {item.AdvanceDesign}
                                        </span>
                                    </div>
                                </>
                            ))}

                <button className="bg-[#3445E0] mb-4 border-solid border-[1px] border-[#3445E0] text-[#fff] font-semibold w-full mt-10 text-lg py-4 rounded-xl">
                    Book a Demo 
                </button>
            </div>
            <div className="px-8 py-6 w-full  shadow-2xl h-[800px] rounded-xl bg-transparent border-solid border-[1px] border-[#f3f6fc]-500">
                <button className="bg-transparent mb-4 border-solid border-[1px] border-[#3445E0] text-[#3445E0] font-semibold text-lg px-5  py-2 rounded">
                    Advance Combo
                </button>
            <h2 className="text-black text-2xl mb-5">
            Product Design & <br></br> Frontend Engineering as <br></br> a Service
            </h2>
            <h2 className="text-black text-2xl mb-5">
                $6399 /mo $7000
            </h2>
            <div className= "border-solid border-[1px] border-[#f3f6fc]-500 w-full mb-5" ></div>
            {AdvanceCombo.map((item) => (
                                <>
                                    <div className="FlexRow py-1">
                                        <Image
                                            src={mark}
                                            className='object-contain h-4 w-4'
                                            alt=''
                                        />
                                        <span className='text-lg text-[#4A4D55] ml-2'>
                                            {item.AdvanceCombo}
                                        </span>
                                    </div>
                                </>
                            ))}

                <button className="bg-[#3445E0] mb-4 border-solid border-[1px] border-[#3445E0] text-[#fff] font-semibold w-full mt-10 text-lg py-4 rounded-xl">
                    Book a Demo 
                </button>
            </div>
            <div className="px-8 py-6 w-full h-[700px] rounded-xl bg-transparent border-solid border-[1px] border-[#f3f6fc]-500">
                <button className="bg-transparent mb-4 border-solid border-[1px] border-[#3445E0] text-[#3445E0] font-semibold text-lg px-5  py-2 rounded">
                    Advance Frontend
                </button>
            <h2 className="text-black text-2xl mb-5">
                Frontend Engieering as a <br></br>Service
            </h2>
            <h2 className="text-black text-2xl mb-5">
                $3799 /mo
            </h2>
            <div className= "border-solid border-[1px] border-[#f3f6fc]-500 w-full mb-5" ></div>
            {AdvanceFrontend.map((item) => (
                                <>
                                    <div className="FlexRow py-1">
                                        <Image
                                            src={mark}
                                            className='object-contain h-4 w-4'
                                            alt=''
                                        />
                                        <span className='text-lg text-[#4A4D55] ml-2'>
                                            {item.AdvanceFrontend}
                                        </span>
                                    </div>
                                </>
                            ))}

                <button className="bg-[#3445E0] mb-4 border-solid border-[1px] border-[#3445E0] text-[#fff] font-semibold w-full mt-10 text-lg py-4 rounded-xl">
                    Book a Demo 
                </button>
            </div>
        </div>
        
    </section> 
)
}

export default Footer

