import React from 'react'

interface Props {
    title: string;
    onClick?: () => void;
    width?: string;
    loading?: boolean;
    padding?: string;
    noIcon?: boolean;
}
const Button = ({ title, onClick, width, loading, padding, noIcon }: Props) => {
    return (<button className={`ease group relative z-30 box-border inline-flex ${width ? width : "w-auto"} ${padding} cursor-pointer items-center justify-center overflow-hidden rounded px-8 py-3 focus:outline-none transition-all duration-300`} onClick={onClick}>
        <a className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-pink-300 rounded hover:bg-white group">
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-tr from-blue-400 to-red-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 "></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:font-bold">
                {noIcon && <svg className='relative flex-shrink-0 w-5 h-5 mr-2 text-blue-500'
                    fill='none'
                    stroke='currentColor' viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth="2"
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                    >

                    </path>
                </svg>}
                {loading ? "loading..." : title}
            </span>
        </a>

    </button>
    )
}

export default Button