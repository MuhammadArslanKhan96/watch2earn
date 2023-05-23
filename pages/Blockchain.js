import React, { useState } from 'react'
import { Container } from 'reactstrap'
import Hero from '../components/Hero'
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'
import BusinessSlide from '../components/BusinessSlide'
import Block from '../components/Data/Blockdata'
import Services from '../components/Services'
import Jello from 'react-reveal/Jello';

export default function Blockchain() {
    const [selected, setSelected] = useState(0);

    return (
        <>
            <Hero />
            <Services />
            <section className="bg-[#ffffff] ">
                <Container className="md:px-28 py-20 mx-2">


                    <div className="flex md:flex md:flex-row pb-[90px] md:justify-around md:items-center flex-col">


                        <h1 className="text-[#000] text-[44px] font-bold">
                            Custom Blockchain <br />
                            Development Solutions We <br /> Offer </h1>
                        <h2 className="mt-4 text-[#000] md:w-[515px] w-full text-[20px]">
                            Enjoy heightened security, efficiency, and transparency. Gain the
                            very best in custom blockchain application development,
                            integration, and adaptation from the top Blockchain Development
                            Company and custom blockchain app development in the USA.</h2>
                    </div>
                    <BusinessSlide />

                </Container>
                <div className='bg-[#0D1296] w-full mb-[90px] pb-[90px]'>
                    <div className='flex justify-center'>
                        <div className='flex flex-col'>
                            <div className='text-[#ffffff] text-[45px] pt-20 font-semibold'>Why Choose Our Blockchain App <br /> Development Services?</div>
                            <div className='text-[#ffffff] py-5 text-[20px]'>
                                Accurate data-driven consultation to develop and implement your blockchain development
                                <br /> and blockchain solutions company projects with ease.
                            </div>
                            <div className='text-[#ffffff] py-5 text-[20px]'>
                                We harness scalability with niche expertise through our time-tested development process. <br />
                                Our Blockchain app development services a well-known blockchain solutions company <br />
                                offer data-driven solutions to match your business needs, whether you’re a startup or an <br />
                                enterprise. We help you secure and validate ownership of your digital assets and <br />
                                decentralize your network to manage your data with smart contracts. Our custom <br />
                                blockchain app development solutions fit businesses searching for optimum scalability in <br />
                                fintech, e-commerce, gaming, financial institutions, IoT, education, retail, health, and much <br />
                                more.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex bg-[#efefef]'>
                    <div className='h-full w-full'>
                        <Image src={Block[selected]?.image} width={800} height={900} alt='fund' />
                    </div>
                    <div className='flex flex-col px-10 py-20'>
                        <div className='text-[42px] font-bold py-5'>Robust, Stable and Secure Blockchain <br /> Development Solutions</div>
                        <div className='text-[20px] py-5' >Our blockchain app development company helps a diverse clientele build result-driven apps for
                            <br /> different industries.</div>
                        <div className='flex justify-between py-5 px-10'>
                            {Block.length ? Block.map((item, idx) => (
                                <div className={'text-[20px] font-semibold opacity-50 hover:text-transparent  bg-clip-text  hover:bg-[#0D1296] hover:border-b-2 hover:border-b-[#0D1296] cursor-pointer ' + (selected === idx ? 'bg-[#0D1296] border-b-2 border-b-[#0D1296] ' : '')} key={idx} onClick={() => setSelected(idx)}>{item.btnText || item.title}</div>

                            )) : null}
                        </div>
                        <div className='text-[24px] font-bold py-5' >{Block[selected]?.title}</div>
                        <div className='text-[20px] py-5'>{Block[selected]?.desc}</div>
                    </div>
                </div>
                <Container className="md:px-28 py-20 mx-2 pb-[90px]">
                    <div className="flex md:flex md:flex-row pb-[90px] md:justify-around md:items-center flex-col">

                        <div className='flex flex-col'>
                            <h1 className="text-[#000] text-[44px] font-bold pb-[16px]"> Blockchain Development Process  </h1>
                            <h2 className="text-[#000] text-[20px]">
                                Leverage our refined process - Run rapid tests and achieve product maturity at <br />
                                the earliest stages to transform your ideas into scalable and robust applications. <br />
                                Our tailored process is optimized to meet existing blockchain industry changes.</h2>
                        </div>

                    </div>
                    <div className='flex justify-center '>
                        <div className='flex flex-col '>
                            <div className='flex gap-x-10'>
                                <div className='items-center border border-athens-gray text-[#000000] hover:scale-110 hover:bg-[#0D1296] hover:text-[#FFFFFF] rounded-[5px] px-5 py-5'>
                                    <div className='text-[22px] font-bold pb-5' >Blockchain <br />Consulting</div>
                                    <div className='text-[16px] pb-5'>
                                        We identify your organization’s <br />
                                        blockchain potential. From market <br />
                                        research, project feasibility <br />
                                        assessment and blockchain <br />
                                        platform analysis, to preferred tool <br />
                                        selection and feature prioritization, <br />
                                        we cover every area required.</div>
                                    <BsArrowRight />

                                </div>
                                <div className='items-center border border-athens-graytext-[#000000] hover:scale-110 hover:bg-[#0D1296] hover:text-[#FFFFFF] rounded-[5px] px-5 py-5'>
                                    <div className='text-[22px] font-bold pb-5' >Experience
                                        <br />and design</div>
                                    <div className='text-[16px] pb-5'>

                                        Our engaging designs produce  <br />
                                        seamless user experience, and  <br />
                                        are based on system blueprint design <br />
                                        comprising technical components. <br />
                                        Moreover, user preferences play a  <br />
                                        critical role in the eventual  <br />
                                        technical design</div>
                                    <BsArrowRight />

                                </div>
                                <div className='items-center border border-athens-gray text-[#000000] hover:scale-110 hover:bg-[#0D1296] hover:text-[#FFFFFF] rounded-[5px] px-5 py-5'>
                                    <div className='text-[22px] font-bold pb-5' >Enterprise
                                        <br /> blockchain</div>
                                    <div className='text-[16px] pb-5'>

                                        From ideation to design and <br />
                                        development, our blockchain <br />
                                        developers formulate and build <br />
                                        enterprise-grade applications that <br />
                                        are robust and ready to implement <br />
                                        for maximum ROI (Return on <br />
                                        Investment).</div>
                                    <BsArrowRight />

                                </div>
                            </div>
                            <div className='flex pt-[40px] gap-x-10'>
                                <div className='items-center border border-athens-gray text-[#000000] hover:scale-110 hover:bg-[#0D1296] hover:text-[#FFFFFF] rounded-[5px] px-5 py-5'>
                                    <div className='text-[22px] font-bold pb-5' >Blockchain <br />
                                        deployment</div>
                                    <div className='text-[16px] pb-5'>

                                        Access the platform you need at <br />
                                        the right stage to harness the true <br />
                                        power of blockchain technology.<br />
                                        Our development team deploys<br />
                                        permissioned and public <br />
                                        blockchain in your cloud <br />
                                        environment too.</div>
                                    <BsArrowRight />

                                </div>
                                <div className='items-center border border-athens-graytext-[#000000] hover:scale-110 hover:bg-[#0D1296] hover:text-[#FFFFFF] rounded-[5px] px-5 py-5'>
                                    <div className='text-[22px] font-bold pb-5' >Blockchain
                                        <br />maintenance</div>
                                    <div className='text-[16px] pb-5'>

                                        We give you peace of mind with <br />
                                        our monitoring system through<br />
                                        support and maintenance for your<br />
                                        OS release, 3rd party upgrades,<br />
                                        and new releases. We stand by you<br />
                                        and help you tackle any amount of<br />
                                        minor and critical issues.</div>
                                    <BsArrowRight />

                                </div>
                                <div className='items-center border border-athens-gray text-[#000000] hover:scale-110 hover:bg-[#0D1296] hover:text-[#FFFFFF] rounded-[5px] px-5 py-5'>
                                    <div className='text-[22px] font-bold pb-5' >Migration
                                        <br /> and upgrades</div>
                                    <div className='text-[16px] pb-5'>
                                        We move your existing operation to<br />
                                        the blockchain, and we produce a<br />
                                        roadmap that includes migration,<br />
                                        testing, and updation to ensure<br />
                                        your business processes keep<br />
                                        running and don&apos;t suffer any<br />
                                        downtime.</div>
                                    <BsArrowRight />

                                </div>
                            </div>

                        </div>
                    </div>
                </Container>



                <div className='bg-[#0D1296] w-full mb-[90px] pb-[90px]'>
                    <div className='flex justify-center'>
                        <div className='flex flex-col'>
                            <div className='text-[#ffffff] text-[45px] pt-20 font-semibold'>
                                Why is Blockchain the Future of <br />
                                Hybrid Projects?</div>
                            <div className='text-[#ffffff] py-5 text-[20px]'>
                                Security is always the number one reason enterprises opt for custom blockchain <br />
                                application development solutions and blockchain app development company A<br />
                                major pain point when it comes to the future of blockchain usage is scalability.<br />
                                The idea of hybrid solutions can solve many issues related to scalability, a <br />
                                traditionally known limitation.
                            </div>
                            <div className='text-[#ffffff] py-5 text-[20px]'>
                                A fully functional hybrid blockchain seamlessly integrating a public chain with a <br />
                                private network is a tremendous achievement. A hybrid blockchain comprises a<br />
                                permissioned blockchain with a public blockchain, allowing entities to enjoy<br />
                                secure background transactions with associates while allowing consumers to <br />
                                access product information on an open ledger.
                            </div>
                        </div>
                    </div>
                </div>
                <Container className="md:px-28 py-20 mx-2 pb-[90px] bg-[#f4f6f9]">
                    <div className="flex md:flex md:flex-row pb-[90px] md:justify-around md:items-center flex-col">

                        <div className='flex flex-col'>
                            <h1 className="text-[#000] text-[42px] font-bold pb-[16px]"> Blockchain App Development – Technology Stack </h1>
                            <h2 className="text-[#000] text-[19px]"> We offer Custom Blockchain development service with scalable and tested technologies to deliver excellence.</h2>
                        </div>
                        <h2 className="mt-4 text-[#000] md:w-[515px]  text-[20px]">
                        </h2>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex flex-col'>
                            <div className='flex flex-col'>
                                <div className='flex justify-between gap-x-5 pb-[32px]'>
                                    <Image src="/images/hyperledger11.png" width={40} height={40} alt='fund' />
                                    <Image src="/images/quorum1.png" width={40} height={40} alt='fund' />
                                    <Image src="/images/cardano1.png" width={40} height={40} alt='fund' />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex justify-between gap-x-5 pb-[32px]'>
                                    <Image src="/images/neblio1.png" width={40} height={40} alt='fund' />
                                    <Image src="/images/bitcoin11.png" width={40} height={40} alt='fund' />
                                    <Image src="/images/ethereum1.png" width={40} height={40} alt='fund' />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex  gap-x-5 '>
                                    <Image src="/images/ripple2.png" width={40} height={40} alt='fund' />
                                    <Image src="/images/aion-logo-p.png" width={40} height={40} alt='fund' />
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#ffffff] h-fit pl-10 pr-20 py-12 rounded-[4px]' >
                            <div className='flex flex-col '>
                                <div className='flex items-center'>
                                    <div>  <Image src="/images/react.png" width={50} height={50} alt='fund' /> </div>
                                    <div className='text-[24px] px-[15px]'>Hyperledger</div>
                                </div>
                                <div className='text-[20px]'>
                                    Get the support you need for collaborative development of  <br />
                                    distributed ledgers, and witness the true power and potential <br />
                                    of blockchain </div>
                            </div>

                        </div>
                    </div>
                </Container>
                <div className='bg-[#FFFFFF] w-full pb-[90px]'>
                    <div className='flex justify-center'>
                        <div className='flex flex-col'>
                            <div className=' text-[45px] pt-20 font-semibold'>
                                How Secure is a blockchain<br />
                                Development Platform ?
                            </div>
                            <div className=' py-5 text-[20px]'>
                                Blockchain development platforms are relatively far more stable and secure <br />
                                compared to any other. Like other platforms, blockchain ones can also be<br />
                                hacked, but since every change doesn&apos;t go unnoticed, any unsolicited action is<br />
                                picked up.
                            </div>
                            <div className=' py-5 text-[20px]'>
                                Enterprises opt for blockchain development platform services because they<br />
                                ensure better security compared to other technologies. Living in an age where<br />
                                cybersecurity has become ever-so-important for personal, corporate, and<br />
                                national security, blockchain technology helps solve a great many issues related<br />
                                to security.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#f4f6f9]'>
                    <Container className="md:px-28 py-20 mx-2">


                        <div className="flex md:flex md:flex-row pb-[90px] md:justify-around md:items-center flex-col">

                            <div className='flex flex-col'>
                                <h1 className="text-[#000] text-[44px] font-bold"> Key Highlights</h1>
                                <h2 className="text-[#000] text-[32px] font-bold">  our work in numbers. </h2>
                            </div>
                            <h2 className="mt-4 text-[#000] md:w-[515px] w-full text-[20px]">
                                Develop your blockchain solution to thrive just like many others
                                have, and let experienced<p className='font-bold'>Blockchain development service </p> our
                                experts create functionalities that rivet your target audience for
                                blockchain application development.
                            </h2>


                        </div>

                        <div className='flex justify-evenly mb-[30px]'>

                            <div className='items-center border bg-[white] px-[60px] py-[40px]'>
                                <Jello>   <div className='text-[40px] hover:text-transparent 
                                bg-clip-text hover:bg-gradient-to-r from-[#FE3CEE] to-[#0E9AC5] font-bold pb-[10px]' >
                                    12+</div> </Jello>
                                <div className='text-[20px] '>
                                    Years</div>


                            </div>
                            <div className='items-center border bg-[white] px-[60px] py-[40px]'>
                                <Jello>  <div className='text-[#000000] hover:text-transparent 
                                bg-clip-text hover:bg-gradient-to-r from-[#FE3CEE] to-[#0E9AC5]  text-[40px] font-bold pb-[15px]' >
                                    200+</div></Jello>
                                <div className='text-[20px] '>
                                    Employees</div>


                            </div>
                            <div className='items-center border bg-[white] px-[60px] py-[40px]'>
                                <Jello> <div className='text-[40px] hover:text-transparent
                                bg-clip-text hover:bg-gradient-to-r from-[#FE3CEE] to-[#0E9AC5] font-bold pb-[15px]' >
                                    600+</div> </Jello>
                                <div className='text-[20px] '>
                                    Projects</div>


                            </div>
                            <div className='items-center border bg-[white] px-[60px] py-[40px]'>
                                <Jello>   <div className='text-[40px] hover:text-transparent 
                                bg-clip-text hover:bg-gradient-to-r from-[#FE3CEE] to-[#0E9AC5] font-bold pb-[15px]' >
                                    550+</div> </Jello>
                                <div className='text-[20px] '>
                                    Clients</div>


                            </div>
                        </div>

                    </Container>
                </div>

            </section>
        </>
    )
}
