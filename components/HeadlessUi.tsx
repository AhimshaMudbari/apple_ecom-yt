import { Tab } from '@headlessui/react'
import React from 'react'
import Product from './Product';
interface Props {
    categories: [Category];
    products: [Products]
}
const HeadlessUi = ({ categories, products }: Props) => {

    const showProducts = (category: number) => {
        return products.filter((product) => product.category._ref === categories[category]._id).map((products) => (
            <Product key={products._id} product={products} />
        ))
    }
    return (
        <Tab.Group>
            <Tab.List className='flex justify-center space-x-4'>

                {categories.map((category) => (
                    <Tab
                        key={category._id}
                        id={category._id}
                        className={({ selected }) => `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${selected ? "borderGradient bg-[#353B3C] text-white" : "border-b-2 border-[#353B3c] text-red-400"}`}
                    >{category.title}</Tab>
                ))}
            </Tab.List>
            <Tab.Panels className="pt-10 pb-24 mx-auto max-w-fit sm:px-4">
                <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
                <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
                <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
                <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>

            </Tab.Panels>
        </Tab.Group>
    )
}

export default HeadlessUi

