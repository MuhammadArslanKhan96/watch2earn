import Image from 'next/image'
import React from 'react'
import { Container } from 'reactstrap'

const Userdashboard = () => {
    return (
        <>
            <Container className="top-0 ">
                <div className='flex'>
                    <div className='w-[20%] bg-[#0b2a5d]  '>
                        <div className='flex flex-col px-[40px] py-[20px] gap-y-28'>
                            <div className='flex flex-col gap-y-4'>
                                <div className='flex justify-center'>
                                    <div className='rounded-full w-fit p-4 flex  items-center bg-gradient-to-r from-[#fff200] via-[#ff5100] to-[#5100ff]'>
                                        <Image src="/images/avt4.jpg" width={100} height={100} alt='' className='rounded-full' />
                                    </div>
                                </div>
                                <div className='flex flex-col text-center'>
                                    <p className='text-[22px] text-white font-bold'>Name</p>
                                    <p className='text-[22px] text-white font-bold'>SurName</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-8 items-center pb-[40px]'>
                                <div className='text-[16px] text-white cursor-pointer'
                                onClick={() => window.location.replace("/Userprofile")}
                                >USER PROFILE</div>
                                <div className='h-[1px] w-full text-transparent bg-blue-400 rounded-full'>m</div>
                                <div className='text-[16px] text-white rounded-full py-2 cursor-pointer px-8 bg-gradient-to-r from-[#fff200] via-[#ff5100] to-[#5100ff] '
                                >DASHBOARD</div>
                                <div className='h-[1px] w-full text-transparent  bg-blue-400 rounded-full'>m</div>
                                <div className='text-[16px] text-white cursor-pointer'
                                onClick={() => window.location.replace("/Message")}
                                > MESSAGES</div>
                                <div className='h-[1px] w-full text-transparent bg-blue-400 rounded-full'>m</div>
                                <div className='text-[16px] text-white cursor-pointer'
                                onClick={() => window.location.replace("/Notify")}
                                >NOTIFICATIONS</div>
                                <div className='h-[1px] w-full text-transparent bg-blue-400 rounded-full'>m</div>
                                <div className='text-[16px] text-white'>SETTINGS</div>
                                <div className='h-[1px] w-full text-transparent bg-blue-400 rounded-full'>m</div>
                                <div className='text-[16px] text-white cursor-pointer'
                                    onClick={() => window.location.replace("/Earning")}
                                >EARNING</div>


                            </div>
                        </div>
                    </div>

                    <div className='w-[90%] bg-[#F7F7F7] rounded-tr-[8px] px-[40px] rounded-br-[8px]'>

                        <div className='text-[18px] pt-[60px] text-[#a0bfdfde] font-bold cursor-pointer '

                        >
                            DASHBOARD</div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Userdashboard
