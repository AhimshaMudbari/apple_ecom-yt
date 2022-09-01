import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
interface Props {
    product: Products
}
const Product = ({ product }: Props) => {

    return (

        <div className='flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-gray-800 p-8 md:h-fit md:w-[400px] md:min-h-[500px] md:flex  md:p-10 '>
            <div className='relative w-full h-[300px] md:h-[300px]'>
                <Image src={urlFor(product.image[0]).url()} alt="" layout='fill' objectFit='contain' />
            </div>
            <div className='flex items-center justify-center flex-1 space-x-3 w-[90%]'>
                <div className='space-y-2 text-xl text-gray-100 md:text-2xl'>
                    <p className='font-bold'>{product.title}</p>
                    <p className='font-semibold'>${product.priice}</p>
                    <p className='invisible h-0 md:text-lg md:text-justify md:visible md:h-fit'>
                        {product?.description[0]?.children[0]?.text}
                    </p>
                </div>
                <div className='flex h-15 w-15 flex-shrink-0 justify-center items-center rounded-full bg-gradient-to-r from-blue-700 to-red-300 md:h-[70px] md:w-[70px] mt-[200px]'>
                    <ShoppingCartIcon className='w-10 h-10 text-gray-800 cursor-pointer ' />
                </div>
            </div>
        </div>

    )
}

export default Product