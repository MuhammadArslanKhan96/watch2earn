import React from 'react'
import Sidebar from '../components/Sidebar'
import { Container } from 'reactstrap/lib'
import { CircularProgressbar } from 'react-circular-progressbar'
import Image from 'next/image'
import { ImPencil } from "react-icons/im"
import Earn from "../components/Data/Earningdata"



const Analytics = () => {
    const percentage = 24;
    const classify = 91;

    return (
        <div className='flex '>
            <Sidebar />
            <Container className='mt-[100px] gap-y-6 flex flex-col px-[20px] py-[40px]'>
                <Container className='flex justify-between gap-x-8'>
                    <div className='flex justify-around  w-[40%] border border-[#77747460] rounded-[5px] p-[20px]'>
                        <div className='flex flex-col gap-y-12'>
                            <div className=' text-[16px] font-bold text-[grey]'>WORKED TIME</div>
                            <div className='text-[16px] text-center'>6:34</div>

                        </div>
                        <div className='w-[2px] bg-[#77747460]'></div>
                        <div className='flex flex-col  gap-y-12'>
                            <p className='text-[16px] font-bold text-[grey] gap-y-10'>AVG. AVTIVITY</p>
                            <p className='text-[16px] text-center'>53%</p>

                        </div>
                    </div>
                    <div className='flex justify-around  w-[60%] border border-[#77747460] rounded-[5px] p-[20px]'>
                        <div className='flex flex-col gap-y-6'>
                            <div className=' text-[16px]  font-bold text-[grey]'>
                                <div className=' text-[16px] font-bold text-[grey]'>FOCUS TIME</div>
                            </div>
                            <div className='text-[16px] font-bold w-20 text-center'>
                                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                            </div>

                        </div>
                        <div className='w-[2px] bg-[#77747460]'></div>
                        <div className='flex flex-col  gap-y-6'>
                            <div className=' text-[16px]  font-bold text-[grey]'>
                                <div className=' text-[16px] font-bold text-[grey]'>WORK TIME CLASSIFICATION</div>
                            </div>
                            <div className='flex gap-x-2'>
                                <div className='text-[16px] font-bold w-20 text-center'>
                                    <CircularProgressbar value={classify} text={`${classify}%`} />
                                </div>
                                <div className='flex flex-col gap-y-2'>
                                    <div className='flex items-center gap-x-2'>
                                        <div className='w-[10px] h-3 rounded-[50%] text-transparent bg-[#00A3A3]'>m</div>
                                        <div className='text-[14px] text-[#aaa8a8]'>91% Core work</div>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <div className='w-[10px] h-3 rounded-[50%] text-transparent bg-[#77747460]'>m</div>
                                        <div className='text-[14px] text-[#aaa8a8]'>9% Non-Core work</div>
                                    </div>
                                    <div className='flex items-center gap-x-2 '>
                                        <div className='w-[10px] h-3 rounded-[50%] text-transparent bg-[#e59328]'>m</div>
                                        <div className='text-[14px] text-[#aaa8a8]'>0% Unproductive</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>

                <Container >
                    <div className='flex gap-x-6 px-[20px]'>
                        <div className='text-[14px] font-bold'>9:00 am - 10:00 am</div>
                        <div className='text-[14px] text-[#77747460] font-bold'>Total time worked 0:25:59</div>
                    </div>
                    <div className='flex justify-between gap-x-8 px-[40px] py-[40px]'>

                        {Earn.map((item, idx) => (
                            <>
                                <div className='flex flex-col gap-y-3'>
                                    <div className='flex justify-center font-bold text-[16px] rounded-full bg-[#F7F7F7]'>
                                        {item.title}
                                    </div>
                                    <div className='flex justify-center font-bold text-[#77747460] text-[16px] '>
                                        {item.head}
                                    </div>
                                    <div className='flex flex-col gap-y-2 border border-[#77747460] rounded-[5px]'>
                                        <div>
                                            <Image src={item.image} width={200} height={200} alt='' />
                                        </div>
                                        <div className='flex justify-between px-2'>
                                            <div className='font-bold text-[#77747460] text-[14px]'>{item.time}</div>
                                            <div > <ImPencil color='blue' /> </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}

                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default Analytics