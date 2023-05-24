import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Container } from 'reactstrap/lib'
import { UserContext } from '@/context/UserContext'


const Videos = () => {
    const [videos, setVideos] = useState([]);
    let count = 0;
    const [file, setFile] = useState(null);
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user && user.channels) {
            const channels = JSON.parse(user.channels);
            setSubscribers(channels.items[0].statistics.subscriberCount)
        }
        if (user && user.videos) {

            const videos = JSON.parse(user.videos)[0].items;
            setVideos(videos
                .sort(function (a, b) {
                    return Number(b.statistics.viewCount) - Number(a.statistics.viewCount);
                }))
        }
    }, [user])
    useEffect(() => {
        randomConsoleLog()
        // eslint-disable-next-line
    }, []);

    function randomConsoleLog() {
        if (count < 2) {
            const timeToLog = Math.floor(Math.random() * 30000);
            setTimeout(() => {
                fetch(`/api/screenshot`).then((res) => res.blob()).then((blob) => {
                    const file = new File([blob], `image${timeToLog}.png`, {
                        type: 'image/png'
                    });
                    setFile(file)
                    count++
                    randomConsoleLog()
                })
            }, timeToLog);
        }
    }


    return (
        <>
            <section className='flex'>
                <Sidebar />
                <Container className='bg-[#F6F9FC] flex flex-col  p-[24px] '>
                    <div className='flex justify-between p-[24px] gap-x-10'>
                        <div className='text-[22px] text-[#525F7F] font-bold'>
                            Albums
                        </div>
                        <div>

                            <select className='flex gap-x-4 rounded-full font-bold  items-center px-[10px] py-[6px] w-full text-[#F7F7F7] text-[13px] bg-[#2D3450]'>

                                <option className=' mt-[20px]'> Recent Uploads</option>
                                <option> Last 30 days</option>
                                <option> Last 1 Year</option>
                                <option> Time period: All time</option>
                            </select>

                        </div>
                    </div>

                    <div className='grid grid-cols-4 p-[24px] gap-x-5 gap-y-5'>
                        <div className='text-[12px]  flex-col  rounded-[8px] flex justify-center  bg-[#FFFFFF] 
                                py-[20px]  '>
                            <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/" + (videos.length ? videos[0].id : 'pRbxlpvXw2s')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <div className='flex flex-col text-black mt-2 px-[10px]'>
                                <div className='text-[20px] font-bold '>Title</div>
                                <div className='text-[16px] '>Description</div>
                            </div>
                        </div>
                        <div className='text-[12px]  flex-col  rounded-[8px] flex justify-center  bg-[#FFFFFF] 
                                py-[20px]  '>
                            <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/" + (videos.length ? videos[0].id : 'pRbxlpvXw2s')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <div className='flex flex-col text-black mt-2 px-[10px]'>
                                <div className='text-[20px] font-bold '>Title</div>
                                <div className='text-[16px] '>Description</div>
                            </div>
                        </div>
                        <div className='text-[12px]  flex-col  rounded-[8px] flex justify-center  bg-[#FFFFFF] 
                                py-[20px]  '>
                            <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/" + (videos.length ? videos[0].id : 'pRbxlpvXw2s')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <div className='flex flex-col text-black mt-2 px-[10px]'>
                                <div className='text-[20px] font-bold '>Title</div>
                                <div className='text-[16px] '>Description</div>
                            </div>
                        </div>
                        <div className='text-[12px]  flex-col  rounded-[8px] flex justify-center  bg-[#FFFFFF] 
                                py-[20px]  '>
                            <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/" + (videos.length ? videos[0].id : 'pRbxlpvXw2s')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <div className='flex flex-col text-black mt-2 px-[10px]'>
                                <div className='text-[20px] font-bold '>Title</div>
                                <div className='text-[16px] '>Description</div>
                            </div>
                        </div>
                        <div className='text-[12px]  flex-col  rounded-[8px] flex justify-center  bg-[#FFFFFF] 
                                py-[20px]  '>
                            <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/" + (videos.length ? videos[0].id : 'pRbxlpvXw2s')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <div className='flex flex-col text-black px-[10px]'>
                                <div className='text-[20px] font-bold '>Title</div>
                                <div className='text-[16px] '>Description</div>
                            </div>
                        </div>
                        <div className='text-[12px]  flex-col  rounded-[8px] flex justify-center  bg-[#FFFFFF] 
                                py-[20px]  '>
                            <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/" + (videos.length ? videos[0].id : 'pRbxlpvXw2s')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <div className='flex flex-col text-black mt-2 px-[10px]'>
                                <div className='text-[20px] font-bold '>Title</div>
                                <div className='text-[16px] '>Description</div>
                            </div>
                        </div>
                    </div>

                </Container>
            </section>

        </>
    )
}

export default Videos