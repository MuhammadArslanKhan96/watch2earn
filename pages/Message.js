import React from 'react'

const Message = () => {
    return (
        <div className='mt-[200px] flex justify-center text-center'>
            <div
                className="mb-4 rounded-lg bg-green-100 px-6 py-5 text-base text-success-700"
                role="alert">
                <h4 className="mb-2 text-2xl font-medium leading-tight">Well done!</h4>
                <p className="mb-4">
                    Aww yeah, you successfully read this important alert message. This
                    example text is going to run a bit longer so that you can see how
                    spacing within an alert works with this kind of content.
                </p>
                <hr className="border-gray-600 opacity-30" />
                <p className="mb-0 mt-4">
                    Whenever you need to, be sure to use margin utilities to keep things
                    nice and tidy.
                </p>
            </div>
        </div>
    )
}

export default Message