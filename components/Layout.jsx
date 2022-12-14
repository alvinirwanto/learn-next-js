import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'

const Layout = ({ children, pageTitle }) => {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name='keywords' content='next react seo' />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            {/* <div className='bg-gray-500 w-full h-screen flex justify-center items-center'>
                <h1 className='text-white text-3xl'>{mainTitle}</h1>
            </div> */}
            <div className='flex flex-col items-center justify-center pt-[3rem] pb-[5rem]'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout