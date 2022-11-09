import React from 'react'

const Footer = () => {
    return (
        <div className='bg-white p-4 gap-8 flex justify-center text-black'>
            <p>Alvin Irwanto</p>
            <p>{new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer