import Image from 'next/image'
import React from 'react'
import Sidebar from '../components/Sidebar'
import { Container } from 'reactstrap'
import Chart from '../components/ChartEarnning'
import Socialuser from '../components/Socialuser'
import Socialfollowers from '../components/Socialfollowers'
import { FiArrowUp } from "react-icons/fi";
import Earningfollwer from '../components/Earningfollwer'
import Upcomingtask from '../components/Upcomingtask'
import Topviewed from '../components/Topviewed'
import Response from '../components/Response'

const Earning = () => {
    return (
        <>
            <Container className="top-0 ">
                <div className='flex'>
                    <Sidebar />
                    <Container className='bg-[#F6F9FC]  px-[40px] py-[20px]'>
                        <Container className='flex gap-x-[30px] mb-[30px]'>
                            <div className='flex flex-col'>
                                <div className='py-4 text-[24px] font-bold'>Good Morning User</div>
                                <div className='bg-[#FFFFFF] p-[20px] rounded-lg flex flex-col'>
                                    <div className='px-[60px] '>
                                        <div className='text-[16px] text-[#8898AA] my-[2px]'>Engagement Rate</div>
                                        <div className='flex items-center gap-x-2'>
                                            <div className='text-[22px]  text-[#32325D] font-bold my-[8px]'>42.2% </div>
                                            <div className="flex gap-x-1 bg-[#64fab9] px-[6px] py-1 rounded-full">
                                                <div className="text-[#2ca571] text-[14px] font-bold">
                                                    <FiArrowUp size={20} />
                                                </div>
                                                <p className="text-[#2ca571] text-[14px]">3.5%</p>

                                            </div>
                                        </div>
                                    </div>

                                    <Chart />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='py-4 text-[24px] font-bold text-transparent'>Good Morning User</div>
                                <Earningfollwer />
                            </div>

                        </Container>
                        <Container className='flex gap-x-[30px]'>
                            <div className='bg-[#FFFFFF] p-[20px] rounded-lg flex flex-col'>

                                <Upcomingtask />

                            </div>
                            <div className='bg-[#FFFFFF] p-[20px] rounded-lg flex flex-col  '>
                                <Topviewed />

                            </div>
                            <div className='bg-[#FFFFFF] p-[20px] rounded-lg flex flex-col  '>
                                <Response />

                            </div>


                        </Container>
                    </Container>
                </div>
            </Container>
        </>
    )
}
export default Earning