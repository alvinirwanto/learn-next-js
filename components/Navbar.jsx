import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import image1 from '../static/Logo1.png'

const Navbar = () => {
  return (
    <div>
        <div className='flex gap-5 bg-white text-black p-4'>
            <Image
              src={image1}
              width={30}
              height={30}
              alt='logo'
            />

            <Link href='/'>
                <p>Home</p>
            </Link>

            <Link href='/about'>
                <p>About</p>
            </Link>

            <Link href='/news'>
                <p>News</p>
            </Link>

            <Link href='/user'>
            <p>user</p>
            </Link>
        </div>
    </div>
  )
}

export default Navbar