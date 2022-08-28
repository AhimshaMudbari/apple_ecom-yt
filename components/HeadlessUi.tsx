import { Tab } from '@headlessui/react'
import { GetServerSideProps } from 'next'
import React from 'react'

const HeadlessUi = () => {
    return (
        <Tab.Group>
            <Tab.List className='flex justify-center space-x-5'>
                <Tab>good</Tab>
                <Tab>bad</Tab>
                {/* {categories.map((category) => (
                    <Tab
                        key={category._id}
                        id={category._id}
                        className={({ slelected }) => {
                            `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${slelected ? "borderGradient bg-[#353B3C] text-white" : "border-b-2 border-[#353B3c] text-red-400"}`
                        }}
                    >{category.title}</Tab>
                ))} */}
            </Tab.List>
            <Tab.Panels className="pt-10 pb-24 mx-auto max-w-fit sm:px-4">
                {/* <Tab.Panel className="tabPanel">{showProduct(0)}</Tab.Panel>
                <Tab.Panel  className="tabPanel">{showProduct(1)}</Tab.Panel>
                <Tab.Panel  className="tabPanel">{showProduct(2)}</Tab.Panel>
                <Tab.Panel  className="tabPanel">{showProduct(3)}</Tab.Panel> */}
                <Tab.Panel>I am good boy</Tab.Panel>
                <Tab.Panel>I am bad boy</Tab.Panel>

            </Tab.Panels>
        </Tab.Group>
    )
}

export default HeadlessUi
export const getServerSideProps: GetServerSideProps = async () => {
    //    const categories = await fetchCategories()
    return {
        props: {},
    }
}

