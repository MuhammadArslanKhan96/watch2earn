import Image from 'next/image'
import React from 'react'
import { Container } from 'reactstrap'
import Sidebar from '../components/Sidebar'

const Userdashboard = () => {
    return (
        <>
            <Container className="top-0 ">
                <div className='flex'>
                    <Sidebar />

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
