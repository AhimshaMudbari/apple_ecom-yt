import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Landing = () => {
    return (
        <section className='sticky top-0 flex justify-between items-center h-screen p-8 max-w-[1350px] xl:max-w-[1450px] xl:rounded-full xl:space-x-20'>
            <div className='space-y-9'>
                <h1 className='space-y-5 text-5xl font-bold'>
                    <span className='block tracking-wide text-transparent bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text lg:text-6xl xl:text-7xl'>Brought to you</span>
                    <span className='block text-teal-300'>By Apple</span>
                    <span className='block text-teal-300'>Tadaaa daaa</span>
                </h1>
                <div className='space-x-10'>
                    <Button title="Buy Now" />
                    <a className='link'>Learn More...</a>
                </div>

            </div>
            <div className='relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[650px] xl:h-[780px] xl:w-[880px] bg-gradient-to-r from-red-900 to-black rounded-full'>
                <Image src="https://pngimg.com/uploads/iphone_12/iphone_12_PNG12.png" alt="iphone picture" layout='fill' objectFit='contain' />
            </div>

        </section>
    )
}

export default Landing