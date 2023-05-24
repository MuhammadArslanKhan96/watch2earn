import Image from 'next/image'
import React from 'react'
import Sidebar from '../components/Sidebar'
import { Container } from 'reactstrap'
import Chart from '../components/Userchart'
import Socialuser from '../components/Socialuser'
import Socialfollowers from '../components/Socialfollowers'

const Userprofile = () => {
    return (
        <>
            <Container className="top-0 ">
                <div className='flex'>
                    <Sidebar />
                    <Container className='bg-[#F6F9FC]  px-[40px] py-[20px]'>
                        <Container className='flex gap-x-[30px] mb-[30px]'>
                            <div className='flex flex-col '>
                                <div
                                    className="block rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">

                                    <Image
                                        className="rounded-t-lg"
                                        src="/images/cardbg.jpg"
                                        width={325}
                                        height={300}
                                        alt="" />


                                </div>
                                <div className='flex  flex-col text-center rounded-lg bg-[white] p-[24px] '>

                                    <div className='flex justify-between px-[15px] py-[16px]'>
                                        <div className='flex flex-col'>
                                            <p className='text-[18px] text-[#525F7F] font-bold'>22</p>
                                            <p className='text-[14px] text-[#ADB5BD] font-sarif'>Friends</p>
                                        </div>
                                        <div className='flex flex-col'>
                                            <p className='text-[18px] text-[#525F7F] font-bold'>10</p>
                                            <p className='text-[14px] text-[#ADB5BD] font-sarif'>Photos</p>
                                        </div>
                                        <div className='flex flex-col'>
                                            <p className='text-[18px] text-[#525F7F] font-bold'>89</p>
                                            <p className='text-[14px] text-[#ADB5BD] font-sarif'>Comments</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center gap-x-2 py-[8px]  px-[15px]'>
                                        <p className=' text-[17px] text-[#32325D] font-bold'> Jessica Jones, </p>
                                        <p className='text-[17px] text-[#ADB5BD]'>27</p>
                                    </div>
                                    <div className='flex justify-center gap-x-2 py-[8px]  px-[15px]'>
                                        <p className='text-[13px] text-[#ADB5BD]'>Bicharist, Romaina</p>
                                    </div>
                                    <div className='flex flex-col justify-center gap-x-2 py-[24px]  px-[15px]'>
                                        <h5 className=' text-[13px] font-bold text-[#32325D] pb-[8px]'> Solution Manager-Creative Tim Officer </h5>
                                        <h5 className=' text-[13px] font-bold text-[#32325D]'> University of Computer Science </h5>
                                    </div>
                                </div>

                            </div>

                            <div className='bg-[#FFFFFF] p-[20px] rounded-lg flex flex-col'>
                                <div className='px-[60px] '>
                                    <div className='text-[10px] text-[#8898AA] my-[8px]'>PERFOMANCE</div>
                                    <div className='text-[17px] text-[#32325D] my-[8px]'>Total orders</div>
                                </div>
                                <hr
                                    className="my-[12px] h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                                <Chart />
                            </div>
                        </Container>
                        <Container className='flex gap-x-[30px]'>
                            <div className='bg-[#FFFFFF] p-[20px] rounded-lg flex flex-col'>

                                <Socialuser />

                            </div>
                            <div className='flex  '>
                                <Socialfollowers />

                            </div>


                        </Container>
                    </Container>
                </div>
            </Container>
        </>
    )
}

export default Userprofile