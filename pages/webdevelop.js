import React, { useState } from 'react'
import { Container } from 'reactstrap'
import Hero from '../components/Hero'
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'
import Footer from '../components/Footer';
import webData from '../components/Data/webData'
import Services from '../components/Services'
export default function WebDevelop() {
    const [selected, setSelected] = useState(0);
    return (
        <>
            <Hero />
            <Services />
            <section className="bg-[#ffffff]">
                <Container className="md:px-28 py-20 mx-2">


                    <div className="flex md:flex md:flex-row pb-[90px] md:justify-around md:items-center flex-col">


                        <h1 className="text-[#000] text-[44px] font-bold"> Web Development <br /> Services </h1>
                        <h2 className="mt-4 text-[#000] md:w-[515px] w-full text-[20px]">
                            Your web presence is pivotal for your brand, aside from it serving as
                            a point of service. Get started with an experienced website creation
                            team in the USA that knows just what you need to take you
                            forward.</h2>
                        {/* </div> */}


                    </div>

                    <div className='flex justify-evenly'>

                        <div className='items-center border border-athens-gray text-[#000000] hover:scale-125 hover:bg-[#0D1296] hover:text-[#FFFFFF] rounded-[5px] px-5 py-5'>
                            <div className='text-[22px] font-bold pb-5' >Web <br />Development</div>
                            <div className='text-[16px] pb-5'>
                                Leverage Powerful  <br /> platforms and tools to <br />
                                build a vibrant and <br /> robust web <br />
                                presence.</div>
                            <BsArrowRight />

                        </div>
                        <div className='items-center border border-athens-gray text-[#000000] hover:scale-125 hover:bg-[#0D1296] hover:text-[#FFFFFF] rounded-[5px] px-5 py-5'>
                            <div className='text-[22px] font-bold pb-5' >E-Commerce <br />Development</div>
                            <div className='text-[16px] pb-5'>
                                Take your shop online <br />
                                with smart tools to <br />
                                start trading as <br />
                                your brand <br />
                                grows.</div>
                            <BsArrowRight />

                        </div>
                        <div className='items-center border border-athens-gray text-[#000000] hover:scale-125 hover:bg-[#0D1296] hover:text-[#FFFFFF] rounded-[5px] px-5 py-5'>
                            <div className='text-[22px] font-bold pb-5' >Content <br /> Managment</div>
                            <div className='text-[16px] pb-5'>
                                Add, delete, and edit <br />
                                text, images, and <br />
                                audio/video with <br />convenient admin <br />
                                controls.</div>
                            <BsArrowRight />

                        </div>
                        <div className='items-center border border-athens-gray text-[#000000] hover:scale-125 hover:bg-[#0D1296] hover:text-[#FFFFFF] rounded-[5px] px-5 py-5'>
                            <div className=' text-[22px] font-bold pb-5 ' >Custom <br /> Development</div>
                            <div className=' text-[16px] pb-5 '>
                                Build customized web <br />
                                solutions tailored to <br />
                                your specifications <br />
                                and brand <br />
                                identity.</div>
                            <BsArrowRight />
                        </div>

                    </div>

                </Container>
                <div className='flex bg-[#efefef]'>
                    <div className='h-full w-full'>
                        <Image src={webData[selected]?.image} width={800} height={800} alt='fund' />
                    </div>
                    <div className='flex flex-col px-10 py-20'>
                        <div className='text-[42px] font-bold py-5'>Creative Web Development Agency</div>
                        <div className='text-[20px] py-5' >We help a diverse clientele build result-driven web development agency products
                            <br /> for different industries.</div>
                        <div className='flex justify-between py-5 px-10'>
                            {webData.length ? webData.map((item, idx) => (
                                <div className={'text-[20px] font-semibold opacity-50 hover:text-transparent  bg-clip-text  hover:bg-[#0D1296] hover:border-b-2 hover:border-b-[#0D1296] cursor-pointer ' + (selected === idx ? 'bg-[#0D1296] border-b-2 border-b-[#0D1296] ' : '')} key={idx} onClick={() => setSelected(idx)}>{item.btnText || item.title}</div>

                            )) : null}
                        </div>
                        <div className='text-[24px] font-bold py-5' >{webData[selected]?.title}</div>
                        <div className='text-[20px] py-5'>{webData[selected]?.desc}</div>
                    </div>
                </div>
                <Container className="md:px-28 py-20 mx-2 pb-[90px]">
                    <div className="flex md:flex md:flex-row pb-[90px] md:justify-around md:items-center flex-col">

                        <div className='flex flex-col'>
                            <h1 className="text-[#000] text-[44px] font-bold"> Our Work <br /> </h1>
                            <h2 className="text-[#000] text-[32px] font-semibold">  Web Development Solutions <br /> Portfolio</h2>
                        </div>
                        <h2 className="mt-4 text-[#000] md:w-[515px]  text-[20px]">
                            Spanning multiple industries, our skilled and experienced web
                            developers build solutions to take their business forward and thrive
                            among the best of their industries&apos; competitors. </h2>
                    </div>
                    <div className='flex justify-center'>
                        <div>
                            <Image src="/images/tulsa.png" width={540} height={350} alt='fund' />
                        </div>
                        <div className='flex flex-col gap-y-5 px-10'>
                            <div>
                                <Image src="/images/port1.png" width={80} height={80} alt='fund' />
                            </div>
                            <div className='text-[12px] font-semibold'>International Airport</div>
                            <div className='text-[20px] font-semibold'>Nonstop Destinations</div>
                            <div>We have worked with diverse clients for various industries <br />
                                and helped them with result-driven mobile apps.</div>
                            <div className='text-[12px] text-[#5151ffb9]'>VIEW CASE STUDY</div>
                        </div>
                    </div>
                </Container>
                <div className='bg-[#0D1296] w-full pb-[90px]'>
                    <div className='flex justify-center'>
                        <div className='flex flex-col'>
                            <div className='text-[#ffffff] text-[45px] pt-20 font-semibold'>Why choose us</div>
                            <div className='text-[#ffffff] py-5 text-[20px]'>Along with designing and developing your web presence, we propose business- <br />
                                oriented web development solutions that fit your needs and speak volumes of <br />
                                your values as a brand. With experienced web developers and digital artisans, <br />
                                you get a state-of-the-art solution with a cutting-edge appeal that engages <br />
                                more people online. Leverage powerful technologies and robust architecture to <br />
                                build a web solution that fulfills your needs under packaged web development <br />
                                services</div>
                        </div>
                    </div>
                </div>


                <Container className="md:px-28 py-20 mx-2 pb-[90px]">
                    <div className="flex md:flex md:flex-row pb-[90px] md:justify-around md:items-center flex-col">

                        <div className='flex flex-col'>
                            <h1 className="text-[#000] text-[42px] font-bold pb-[16px]"> Web development technology stack </h1>
                            <h2 className="text-[#000] text-[19px]"> Experience pure creativity, skill, and expertise in Technologies for Web Development.</h2>
                        </div>
                        <h2 className="mt-4 text-[#000] md:w-[515px]  text-[20px]">
                        </h2>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex flex-col'>
                            <div className='flex flex-col'>
                                <div className='text-[24px] font-semibold pb-[24px]'>Front-End</div>
                                <div className='flex justify-between gap-x-5 pb-[32px]'>
                                    <Image src="/images/react.png" width={40} height={40} alt='fund' />
                                    <Image src="/images/angular.png" width={40} height={40} alt='fund' />
                                    <Image src="/images/html5.png" width={40} height={40} alt='fund' />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[24px] font-semibold pb-[24px]'>Back-End</div>
                                <div className='flex justify-between gap-x-5 pb-[32px]'>
                                    <Image src="/images/java-script.png" width={40} height={40} alt='fund' />
                                    <Image src="/images/gt-18.png" width={40} height={40} alt='fund' />
                                    <Image src="/images/gt-17.png" width={40} height={40} alt='fund' />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[24px] font-semibold pb-[24px]'>Infrastructure</div>
                                <div className='flex justify-between gap-x-5 '>
                                    <Image src="/images/cld-r-1.png" width={40} height={40} alt='fund' />
                                    <Image src="/images/amazon_web_services-r2.png" width={40} height={40} alt='fund' />
                                    <Image src="/images/az-r-1.png" width={40} height={40} alt='fund' />
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#f4f6f9] h-fit pl-10 pr-20 py-12 rounded-[4px]' >
                            <div className='flex flex-col '>
                                <div className='flex items-center'>
                                    <div>  <Image src="/images/react.png" width={50} height={50} alt='fund' /> </div>
                                    <div className='text-[24px] px-[15px]'>React</div>
                                </div>
                                <div className='text-[20px]'>Leverage React&apos;s powerful and flexible framework to build <br />
                                    purposeful front end aspects for your web solution that are <br />
                                    engaging.</div>
                            </div>

                        </div>
                    </div>
                </Container>
                <Container className="md:px-28 py-20 mx-2">


                    <div className="flex md:flex md:flex-row pb-[90px] md:justify-around md:items-center flex-col">

                        <div className='flex flex-col'>
                            <h1 className="text-[#000] text-[44px] font-bold"> Our Process</h1>
                            <h2 className="text-[#000] text-[32px] font-bold">  Web Development. </h2>
                        </div>
                        <h2 className="mt-4 text-[#000] md:w-[515px] w-full text-[20px]">
                            Build a web presence thriving with programming tools like Python,
                            Angular, React Native, and renowned cloud website creation
                            services in the USA with creative experts who formulate customized
                            solutions.</h2>
                        {/* </div> */}


                    </div>

                    <div className='flex justify-evenly'>

                        <div className='items-center  px-5 py-5'>
                            <div className=' flex flex-col ' >
                                <div className='text-[90px] font-bold '> 01 </div>
                                <div className='text-[23px] font-bold pb-4'>Project Planning </div>
                                <div className='h-[1px] w-full bg-[#eee]'></div>
                            </div>
                            <div className='flex flex-col py-5'>
                                <div className='flex justify-start gap-x-5 gap-y-3'>
                                    <div>&#9632;</div>
                                    <div className='text-[18px]'>Business analysis</div>
                                </div>
                                <div className='flex justify-start gap-x-5 gap-y-3'>
                                    <div>&#9632;</div>
                                    <div className='text-[18px]'>Documenting specifications</div>
                                </div>
                                <div className='flex justify-start gap-x-5 gap-y-3'>
                                    <div>&#9632;</div>
                                    <div className='text-[18px]'>Preparing wireframess</div>
                                </div>
                                <div className='flex justify-start gap-x-5 gap-y-3'>
                                    <div>&#9632;</div>
                                    <div className='text-[18px]'>Getting client approval</div>
                                </div>
                            </div>
                        </div>
                        <div className='items-center  px-5 py-5'>
                            <div className=' flex flex-col' >
                                <div className='text-[90px] font-bold '> 02 </div>
                                <div className='text-[23px] font-bold pb-4'>UI/UX Design </div>
                                <div className='h-[1px] w-full bg-[#eee]'></div>
                            </div>
                            <div className='flex flex-col py-5'>
                                <div className='flex justify-start gap-x-5 gap-y-3'>
                                    <div>&#9632;</div>
                                    <div className='text-[18px]'>Crafting app prototype</div>
                                </div>
                                <div className='flex justify-start gap-x-5 gap-y-3'>
                                    <div>&#9632;</div>
                                    <div className='text-[18px]'>Making changes</div>
                                </div>
                                <div className='flex justify-start gap-x-5 gap-y-3'>
                                    <div>&#9632;</div>
                                    <div className='text-[18px]'>Getting client approval</div>
                                </div>
                                <div className='flex justify-start gap-x-5 gap-y-3'>
                                    <div>&#9632;</div>
                                    <div className='text-[18px]'>Implementing feedback</div>
                                </div>
                            </div>
                        </div>
                        <div className='items-center  px-5 py-5'>
                            <div className=' flex flex-col ' >
                                <div className='text-[90px] font-bold '> 03 </div>
                                <div className='text-[23px] font-bold pb-4'>Development </div>
                                <div className='h-[1px] w-full bg-[#eee]'></div>
                            </div>
                            <div className='flex flex-col py-5'>
                                <div className='flex justify-start gap-x-5 gap-y-3'>
                                    <div>&#9632;</div>
                                    <div className='text-[18px]'>Development strategy</div>
                                </div>
                                <div className='flex justify-start gap-x-5 gap-y-3'>
                                    <div>&#9632;</div>
                                    <div className='text-[18px]'>Testing strategy</div>
                                </div>
                                <div className='flex justify-start gap-x-5 gap-y-3'>
                                    <div>&#9632;</div>
                                    <div className='text-[18px]'>Product development</div>
                                </div>
                                <div className='flex justify-start gap-x-5 gap-y-3'>
                                    <div>&#9632;</div>
                                    <div className='text-[18px]'>Product release</div>
                                </div>
                            </div>
                        </div>


                    </div>
                </Container>
                <div className='bg-[#f4f6f9]'>
                    <Container className="md:px-28 py-20 mx-2">


                        <div className="flex md:flex md:flex-row pb-[90px] md:justify-around md:items-center flex-col">

                            <div className='flex flex-col'>
                                <h1 className="text-[#000] text-[44px] font-bold"> Key Highlights</h1>
                                <h2 className="text-[#000] text-[32px] font-bold">  our work in numbers. </h2>
                            </div>
                            <h2 className="mt-4 text-[#000] md:w-[515px] w-full text-[20px]">
                                Build your web presence to thrive just like many others have, and
                                let experienced technicians and digital creators develop
                                functionalities that rivet your target audience.</h2>
                            {/* </div> */}


                        </div>

                        <div className='flex justify-evenly mb-[30px]'>

                            <div className='items-center border bg-[white] px-[60px] py-[40px]'>
                                <div className='text-[40px] hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-[#FE3CEE] to-[#0E9AC5] font-bold pb-[10px]' >12+</div>
                                <div className='text-[20px] '>
                                    Years</div>


                            </div>
                            <div className='items-center border bg-[white] px-[60px] py-[40px]'>
                                <div className='text-[#000000] hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-[#FE3CEE] to-[#0E9AC5]  text-[40px] font-bold pb-[15px]' >200+</div>
                                <div className='text-[20px] '>
                                    Employees</div>


                            </div>
                            <div className='items-center border bg-[white] px-[60px] py-[40px]'>
                                <div className='text-[40px] hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-[#FE3CEE] to-[#0E9AC5] font-bold pb-[15px]' >600+</div>
                                <div className='text-[20px] '>
                                    Projects</div>


                            </div>
                            <div className='items-center border bg-[white] px-[60px] py-[40px]'>
                                <div className='text-[40px] hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-[#FE3CEE] to-[#0E9AC5] font-bold pb-[15px]' >550+</div>
                                <div className='text-[20px] '>
                                    Clients</div>


                            </div>
                        </div>

                    </Container>
                </div>
                <Footer />
            </section>
        </>
    )
}

