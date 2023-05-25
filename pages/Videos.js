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

                        <table className="w-[60vw] text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-white dark:text-gray-400">
                                <tr>
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
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-white dark:border-gray-700 ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                                        Apple MacBook Pro 17&quot;
                                    </th>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-white dark:border-gray-700 ">
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-gray-400">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-white dark:border-gray-70">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </Container>
            </section>

        </>
    )
}

export default Videos