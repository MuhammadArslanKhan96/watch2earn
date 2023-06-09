import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Container } from 'reactstrap/lib'
import { UserContext } from '@/context/UserContext'
import Image from 'next/image'


const Videos = () => {
    const [videos, setVideos] = useState([]);
    async function getvideos() {
        const videos = await fetch(`/api/get-videos`).then(res => res.json());
        setVideos(videos);
    }
    const [file, setFile] = useState(null);
    let count = 0;


    const uploadFile = async () => {
        console.log(file)
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


        await fetch(`https://api.ocr.space/parse/imageurl?apikey=K88566961588957&url=https://watch-earn.s3.amazonaws.com/${file.name.split('.')[0]}`).then(res => {
            console.log(res.json())
        })


        setFile(null);
    }

    useEffect(() => {
        if (file !== null) {
            uploadFile()


        }
        // eslint-disable-next-line
    }, [file])

    function randomConsoleLog() {
        if (count < 2) {
            const timeToLog = Math.floor(Math.random() * 30000);
            setTimeout(() => {
                fetch(`/api/screenshot`)
                    .then((res) => res.blob())
                    .then((blob) => {
                        const file = new File([blob], `image${timeToLog}.png`, {
                            type: "image/png",
                        });
                        setFile(file);
                        count++;
                        randomConsoleLog();
                    });
            }, timeToLog);
        }
    };
    useEffect(() => {
        getvideos()
    }, [])

    return (
        <>
            <section className='flex'>
                <Sidebar />
                <Container className='bg-[#F6F9FC] flex flex-col  p-[24px]  '>
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

                        <table className="w-[60vw] text-sm text-left rounded-[8px] text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-white  dark:bg-white dark:text-gray-400">
                                <tr className='border-b-[2px] dark:border-gray-700'>
                                    <th scope="col" className="px-6 py-3">
                                        Thumbnail
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Video Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Views
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Comments
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Likes
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        DisLikes
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    videos.length ? videos.map((vid) => (
                                        <>
                                            {JSON.parse(vid.videos).map((video) => (
                                                <>

                                                    <tr className="bg-white border-b dark:bg-white dark:border-gray-700 ">
                                                        <th scope="row" className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">

                                                            <Image src={(video.snippet.thumbnails.high.url)} width={100} height={100} alt='' />
                                                        </th>
                                                        <td className="px-6 py-4 text-blue-500 cursor-pointer" onClick={randomConsoleLog}>
                                                            {video.snippet.title}
                                                        </td>
                                                        <td className="px-6 py-4 text-center">
                                                            {video.statistics.viewCount}
                                                        </td>
                                                        <td className="px-6 py-4 text-center">
                                                            {video.statistics.commentCount}
                                                        </td>
                                                        <td className="px-6 py-4 text-center">
                                                            {video.statistics.likeCount}

                                                        </td>
                                                        <td className="px-6 py-4 text-center">
                                                            {video.statistics.dislikeCount}

                                                        </td>

                                                    </tr>
                                                </>
                                            ))}
                                        </>
                                    )) : null
                                }

                            </tbody>
                        </table>

                    </div>

                </Container>
            </section>

        </>
    )
}

export default Videos