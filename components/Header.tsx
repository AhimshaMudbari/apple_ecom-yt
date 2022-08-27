import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MagnifyingGlassIcon, ShoppingBagIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'

const Header = () => {
    const session = false;
    function signIn() {

    }
    function signOut() { }
    return (
        <header className='sticky top-0 z-30 flex items-center justify-between w-full p-5 bg-[#020d17]'>
            <div className='flex items-center justify-center md:w-1/5 '>
                <Link href="/">
                    <div className='relative w-10 h-10 opacity-75 cursor-pointer hover:opacity-100 '>
                        <Image
                            src="https://pngimg.com/uploads/apple_logo/apple_logo_PNG19676.png"
                            layout='fill'
                            objectFit='contain'
                            alt="home navigate image"
                        />
                    </div>
                </Link>
            </div>

            <div className='items-center justify-center flex-1 hidden space-x-10 md:flex'>
                <a className='headerLink'>Product</a>
                <a className='headerLink'>Explore</a>
                <a className='headerLink'>Support</a>
                <a className='headerLink'>Bussiness</a>
            </div>

            <div className='flex items-center justify-center space-x-5 md:w-1/5'>
                <div className='headerIcon'>
                    <MagnifyingGlassIcon />
                </div>
                <Link href="/checkout">
                    <div className=' headerIcon'>
                        <ShoppingBagIcon className='relative z-100' /> <div className='' ><span className='absolute z-10 flex items-center justify-center w-4 h-4 text-sm font-bold text-black -translate-x-2 -translate-y-5 bg-white border-double rounded-full opacity-50 '>1</span></div>
                    </div>
                </Link>
                <div >
                    {
                        session ?
                            <Image
                                src="https://pngimg.com/uploads/face/face_PNG5654.png"
                                height={34}
                                width={34}
                                layout='fixed'
                                alt='user image'
                                className='bg-white rounded-full headerIcon'
                                onClick={() => signOut()}
                            /> : <UserIcon className='headerIcon' onClick={(e) => signIn()} />
                    }
                </div>
            </div>
        </header>
    )
}

export default Header