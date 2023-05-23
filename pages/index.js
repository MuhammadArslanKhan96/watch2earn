import Image from 'next/image'
import { useSession } from "next-auth/react";
import React, { useState } from 'react'
import { Container } from 'reactstrap'
import { FiArrowRight } from 'react-icons/fi'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { AiOutlineEye } from "react-icons/ai"
import { BiRocket } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Fade from 'react-reveal/Fade';
import VidiqSlide from '../components/VidiqSlide'
import { useRouter } from 'next/router'
import Youtube from '../components/Youtube'
import Navbar from '@/components/Navbar';

const Youtubeservices = () => {
  const router = useRouter();
  const { status } = useSession()
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <section className='xs:mt-[0] lg:mt-[200px]  
        '>
        <Container className='pt-[24px] flex justify-center flex-col pb-[40px]'>
          <div className='  flex justify-center '>
            <div className='flex gap-x-4 rounded-[5px]  items-center px-[16px] py-[8px] text-[14px] bg-[#EDF2F7]'>
              <p className='xs:text-[12px] lg:text-[14px] font-bold'>  BUY YOUTUBE VIEWS</p>
            </div>

          </div>
          <div className='flex justify-center pt-[20px] '>
            <div className='flex gap-x-4   items-center px-[16px] py-[8px]  '>
              <div className='flex items-center gap-x-2'>
                <p className='xs:[16px] lg:text-[36px] font-bold text-[#4C4C4C]'>
                  Buy Youtube Views with </p>
                <p className='xs:[16px] lg:text-[36px] font-bold text-[#B67929]'>
                  Fast Delivery </p>
              </div>
            </div>

          </div>
          <div className='  flex justify-center '>
            <div className='flex xs:gap-x-0 lg:gap-x-4   items-center px-[16px] py-[8px]  '>
              <div className='sm:flex xs:block items-center xs:gap-x-2 lg:gap-x-2'>
                <p className='xs:text-[16px] lg:text-[23px]  text-[#2D3748]'>
                  With Sides Media you can </p>
                <p className='xs:text-[16px] lg:text-[23px] font-bold text-[#2D3748]'> easily buy Youtube Views safely </p>
                <p className='xs:text-[16px] lg:text-[23px]  text-[#2D3748]'>
                  and securely.
                </p>
              </div>
            </div>

          </div>
          <div className='  flex justify-center '>
            <div className='flex gap-x-4   items-center px-[16px] py-[8px]  '>

              <p className='xs:text-[16px] lg:text-[23px]  text-[#2D3748]'>
                Select from the dropdown below: </p>
            </div>

          </div>
          <div className='  flex justify-center '>
            <div className='flex gap-x-4   items-center px-[16px] py-[8px]  '>
              <div className='px-[12px] py-[6px] bg-[#F8F9FA] rounded-[5px]'>
                <div onClick={() => setOpen(!open)} className='xs:gap-x-[100px] lg:gap-x-[200px] flex justify-between px-[12px] py-[6px] bg-[#F8F9FA] '>
                  <div className='flex flex-col xs:text-[16px] lg:text-[20px]'>
                    <p>1000 views</p>
                    {open && <><p>1000 views</p>
                      <p>1000 views</p>
                      <p>1000 views</p>
                      <p>1000 views</p></>}
                  </div>

                  <div className='flex gap-x-2 '>
                    <div className='flex flex-col xs:text-[16px] lg:text-[20px] self-center'>
                      <p>$ 13.00</p>
                      {open &&
                        <>
                          <p>$ 13.00</p>
                          <p>$ 14.00</p>
                          <p>$ 15.00</p>
                          <p>$ 16.00</p>
                        </>}
                    </div>
                    <MdOutlineArrowDropDown size={30} className='sticky top-2' />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='hover:mt-0 transition-[margin_0.6s_ease_0s] mt-[8px] lg:pb-[48px] xs:pb-[20px]'>
            <div className='  flex justify-center  '>
              <div className='flex gap-x-4 rounded-[5px]  items-center px-[8px] py-[8px] text-[14px] bg-[#FFE1A8]'>
                <p className='text-[14px] '>  25% OFF NOW</p>
              </div>
            </div>
            <div className='  flex justify-center  mt-[-2px]'>
              <div className='flex gap-x-4 rounded-[5px]  items-center px-[90px] py-[16px] text-[14px] bg-[#B67929] '>
                <p className='text-[16px] font-bold text-white'>  BUY NOW ($13.00)</p>
              </div>
            </div>
          </div>
          <div className='  flex justify-center  '>
            <div className='flex justify-between xs:flex-col lg:flex-row xs:gap-y-3 lg:gap-x-[40px] rounded-[12px] border border-[#B67929] items-center px-[20px] py-[20px] text-[14px] '>
              <div> <p className='text-[#4C4c4c] font-bold'>
                High-Quality Views include: </p>
              </div>
              <div className='flex items-center gap-x-2'>
                <p>  <BsCheckLg /> </p>
                <p className='text-[#4C4c4c] font-bold'> Real High-Quality </p>
                <p className='text-[#4C4c4c]'>  Views </p>
              </div>
              <div className='flex items-center gap-x-2'>
                <p>  <BsCheckLg /> </p>
                <p className='text-[#4C4c4c] font-bold'> 30 day  </p>
                <p className='text-[#4C4c4c]'>  refills </p>
              </div>
              <div className='flex items-center gap-x-2'>
                <p>  <BsCheckLg /> </p>
                <p className='text-[#4C4c4c] '> Guaranteed  </p>
                <p className='text-[#4C4c4c] font-bold'>  Safe and Secure Delivery </p>
              </div>
            </div>
          </div>
        </Container>
        <Container className="  bg-[#eaeef3] py-[64px] w-full">
          <div className='flex flex-col'>
            <div className=' flex justify-center gap-x-2 text-[16px] 
                text-[white] pb-[20px] text-center'>
              <p className='xs:text-[22px] lg:text-[30px] text-[#454545]'>
                Ready To Buy  </p>
              <p className='xs:text-[22px] lg:text-[30px] text-[#B67929]'>
                YouTube Views? </p>
            </div>
            <div className=' text-center text-[16px] text-[#707070]
                     pb-[20px]'>
              Having high quality Youtube views helps your account grow
              quick through having more engagements on your content.</div>
            <div >
              <Youtube />
            </div>
          </div>
        </Container>

        <Container className="md:px-40 lg:py-40 xs:py-20  bg-[#18213e]">
          <div className='flex justify-center flex-col gap-y-8'>
            <div className='flex justify-center text-[#3D67FF] '>
              WEB • EXTENSION • APP
            </div>
            <div className='flex justify-center flex-col text-center xs:text-[20px] lg:text-[38px] text-[white]'>
              <p>Meet the most advanced</p>
              <p>growth tools for video creators</p>

            </div>
            <div className='flex justify-center lg:flex-row lg:gap-x-28 xs:flex-col xs:gap-x-10'>
              <div>
                <Image src="/images/stats.webp" width={500} height={413} alt='fund' />
              </div>
              <div className='flex flex-col text-center  pt-8 gap-y-6'>
                <div className='flex justify-center flex-col xs:text-[20px] lg:text-[30px] font-bold text-[white]'>
                  <p>Understand what’s</p>
                  <p>working for your channel</p>
                </div>
                <div className='flex justify-center self-center xs:w-[90vw] lg:w-[400px] text-[17px] text-[#BCBCBC]'>
                  Track and compare your performance in real time so
                  you never miss an opportunity to get more views and
                  make money from your videos.
                </div>
                <div className='flex justify-center'>

                  <div className={'flex justify-center gap-x-3 bg-[#139dff] font-bold  mt-[12px] text-[white] px-6 py-3 items-center rounded-[50px] ' + (status === 'authenticated' ? ' cursor-not-allowed' : ' cursor-pointer')}
                    onClick={() => {
                      if (status !== 'authenticated') {
                        window.location.replace("/Signup")
                      }
                    }}>
                    Sign up for free <FiArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container className="md:px-40 lg:py-40 xs:py-5  bg-[#18213e]">
          <div className='flex justify-center flex-col '>
            <div className='flex justify-center xs:text-[22px] lg:text-[30px] text-[white] '>
              Boost your YouTube views
            </div>
            <div className='flex justify-center flex-col text-center xs:text-[14px] lg:text-[16px] text-[#BCBCBC] py-4'>
              <p>Discover keyword, title and description recommendations</p>
              <p>designed to get you more views and subscribers for free.</p>

            </div>
            <div className='flex justify-center gap-x-28 py-10'>
              <div>
                <Image src="/images/table.webp" width={945} height={536} alt='fund' />
              </div>

            </div>
          </div>
        </Container>
        <Container className="lg:px-[80px] xs:px-[20px] lg:py-40 xs:py-5  bg-[#060607]">
          <div className='flex justify-center flex-col '>
            <div className='flex justify-center   xs:text-[18px] lg:text-[28px] gap-x-2 text-[white] '>
              Now with <p className='text-[#07E092]'> artificial intelligence </p> baked in
            </div>

            <div className='bg-[#18112E] xs:mt-[20px] lg:mt-[80px] rounded-[15px] px-[20px] xs:py-[10px] lg:py-[64px]'>
              <div className='flex justify-center lg:flex-row xs:flex-col items-center lg:gap-x-20 xs:gap-y-5'>
                <div className='flex flex-col text-white '>
                  <div className='lg:text-[16px] xs:text-[12px]'>YOUR A.I. CO-PILOT</div>
                  <div className='my-[16px] flex flex-col xs:text-[16px] lg:text-[24px] text-white'>
                    <p>Daily Ideas gives you personalized</p>
                    <p>inspiration to boost your growth.</p>
                  </div>
                  <div className='flex gap-x-4 items-center my-[16px]'>
                    <FaAngleDoubleRight size={20} />
                    <p className='lg:text-[18px] xs:text-[14px]'>Save hours researching</p>
                  </div>
                  <div className='flex flex-col text-[16px]  text-[#AC9EB8] mt-[8px] '>
                    <p>Get in the flow faster with personalized prompts for your</p>
                    <p>next hit video.</p>
                  </div>
                  <div className='flex gap-x-4 items-center my-[16px]'>
                    <AiOutlineEye size={20} />
                    <p className='lg:text-[18px] xs:text-[14px]'>See into the future</p>
                  </div>
                  <div className='flex flex-col text-[16px] text-[#AC9EB8] mt-[8px] '>
                    <p>Focus your efforts with View Prediction and see</p>
                    <p>forecasted performance for each idea.</p>
                  </div>
                  <div className='flex gap-x-4 items-center my-[16px]'>
                    <BiRocket size={20} />
                    <p className='lg:text-[18px] xs:text-[14px]'>Break new ground</p>
                  </div>
                  <div className='flex flex-col text-[16px] text-[#AC9EB8] mt-[8px] '>
                    <p>Supercharge your potential by uniting human creativity</p>
                    <p>with the analytical power of artificial intelligence,</p>
                    <p>designed for creators.</p>
                  </div>
                </div>
                <div className='flex flex-col gap-y-6'>
                  <Fade right>
                    <div className='bg-gradient-to-r flex-col from-[#ff4273] to-[#ff8c5a] rounded-[10px] lg:px-[100px] xs:px-[0px] lg:py-[32px] xs:py-[20px] xs:mx-[20px] flex justify-center items-center'>
                      <div className='flex bg-[#FFFFFF66] text-[#000000] text-[14px] px-[16px] rounded-full'>
                        View Prediction 🚀 Very High
                      </div>
                      <div className='flex mt-[16px] text-[#FFFFFF] xs:text-[16px] lg:text-[24px]'>
                        get more views fast
                      </div>
                      <div className='flex gap-x-4 mt-[32px]'>
                        <div className='flex bg-[#FFFFFF] items-center gap-x-1 text-[#FF4c24] text-[15px] px-[16px]  py-[4px] rounded-full'>
                          Dismiss <RxCross2 />
                        </div>
                        <div className='flex bg-[#FFFFFF] items-center  gap-x-1 text-[#0066ff] py-[4px] text-[15px] px-[16px] rounded-full'>
                          Save <AiOutlineHeart />
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className='bg-gradient-to-r flex-col from-[#2fbae5] to-[#70eb7c] rounded-[10px] lg:px-[100px] xs:px-[0px] lg:py-[32px] xs:py-[20px] xs:mx-[20px] flex justify-center items-center'>
                      <div className='flex bg-[#FFFFFF66] text-[#000000] text-[14px] px-[16px] rounded-full'>
                        View Prediction 🔥 High
                      </div>
                      <div className='flex mt-[16px] text-[#FFFFFF] xs:text-[16px] lg:text-[24px]'>
                        get more views fast
                      </div>
                      <div className='flex gap-x-4 mt-[32px]'>
                        <div className='flex bg-[#FFFFFF] items-center gap-x-1 text-[#FF4c24] text-[15px] px-[16px]  py-[4px] rounded-full'>
                          Dismiss <RxCross2 />
                        </div>
                        <div className='flex bg-[#FFFFFF] items-center  gap-x-1 text-[#0066ff] py-[4px] text-[15px] px-[16px] rounded-full'>
                          Save <AiOutlineHeart />
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className='bg-gradient-to-r flex-col from-[#3d67ff] to-[#93ede8] rounded-[10px] lg:px-[100px] xs:px-[60px] lg:py-[32px] xs:py-[20px] xs:mx-[20px] flex justify-center items-center'>
                      <div className='flex bg-[#FFFFFF66] text-[#000000] text-[14px] px-[16px] rounded-full'>
                        View Prediction 👍 Medium
                      </div>
                      <div className='flex mt-[16px] text-[#FFFFFF] xs:text-[16px] lg:text-[24px]'>
                        get more views fast
                      </div>
                      <div className='flex gap-x-4 mt-[32px]'>
                        <div className='flex bg-[#FFFFFF] items-center gap-x-1 text-[#FF4c24] text-[15px] px-[16px]  py-[4px] rounded-full'>
                          Dismiss <RxCross2 />
                        </div>
                        <div className='flex bg-[#FFFFFF] items-center  gap-x-1 text-[#0066ff] py-[4px] text-[15px] px-[16px] rounded-full'>
                          Save <AiOutlineHeart />
                        </div>
                      </div>
                    </div>
                  </Fade>
                </div>

              </div>
            </div>

          </div>
        </Container>
        <Container className="lg:px-40 lg:py-20 xs:py-10  bg-[#060607]">
          <div className='flex justify-center flex-col '>
            <div className='flex justify-center text-[30px] text-[white] '>
              <Image src="/images/logo.png" width={100} height={80} alt='fund' />
            </div>
            <div className='flex justify-center flex-col text-center xs:text-[22px] lg:text-[56px] text-[white] py-4 px-4'>
              <p>Supercharge your YouTube <br /> channel today</p>
            </div>
            <div className='flex justify-center flex-col text-center xs:text-[16px] lg:text-[22px] text-[#8B98B4] py-4 px-4'>
              <p>Join the millions of creators using Cubic to grow their channels</p>
            </div>
            <div className='flex justify-center'>

              <div className={'flex justify-center gap-x-3 bg-[#139dff] font-bold  mt-[48px] text-[white] px-6 py-3 items-center rounded-[50px] ' + (status === 'authenticated' ? ' cursor-not-allowed' : ' cursor-pointer')} onClick={() => {
                if (status !== 'authenticated') {
                  window.location.replace("/Signup")
                }
              }}>

                Sign up for free <FiArrowRight size={20} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Youtubeservices