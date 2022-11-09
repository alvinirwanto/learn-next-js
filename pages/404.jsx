import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Lottie from 'react-lottie'
import animationData from '../static/404-2.json'

const Custom404 = () => {

    const [showText, setShowText] = useState(false)

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            setShowText(true)
        }, 3000)


        setTimeout(() => {
            router.push('/')
        }, 15000)
    })

    const showData = () => (
        <div className='duration-300 flex flex-col gap-9 items-center justify-center'>
            <div className='text-black text-center'>
                <h2 className='text-2xl font-semibold'>Sorry, this page isn't available.</h2>
                <p>The link you followed may be broken, or the page may have been removed.</p>
            </div>

            <Link href='/' className='w-80' >
                <p className='bg-black text-white px-5 py-3 rounded-md text-center'>Back to Home</p>
            </Link>
        </div>
    )

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <div className='bg-white w-full h-screen overflow-hidden flex flex-col gap-8 items-center justify-center'>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />

            {
                showText && showData()
            }
        </div>
    )
}

export default Custom404