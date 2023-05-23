import Image from 'next/image'
import React from 'react'

const Userprofile = () => {
    return (
        <>
            <div className='mt-[200px] flex justify-center text-center'>
                <div
                    className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                    <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                    <div
                        className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                        <Image
                            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" width={100} height={100} alt='' />
                    </div>
                    <div className="p-6">
                        <h4 className="mb-4 text-2xl font-semibold text-white">John Smith</h4>
                        <hr />
                        <p className="mt-4 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24">
                                <path
                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                            </svg>
                            Delectus impedit saepe officiis ab aliquam repellat rem unde
                            ducimus.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userprofile