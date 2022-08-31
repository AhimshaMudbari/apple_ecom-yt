import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
interface Props {
    product: Products
}
const Product = ({ product }: Props) => {

    return (
        <div className='flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-gray-800 p-8 md:h-[500px] md:w-[400px] md:p-10'>
            <div className='relative w-full h-64 md:h-[250px]'>
                <Image src={urlFor(product.image[0]).url()} alt="" layout='fill' objectFit='contain' />
            </div>
            <div className='flex items-center justify-between flex-1 space-x-3 '>
                <div className='space-y-2 text-xl text-gray-100 md:text-2xl'>
                    <p className='font-bold'>{product.title}</p>
                    <p className='font-semibold'>${product.priice}</p>
                    <p className='text-lg'>
                        {product?.description[0]?.children[0]?.text}
                    </p>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Product