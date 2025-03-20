import React from 'react'

interface HomeProps {
    stroke?: string
    strokeWidth?: number
    width?: number
    heigth?: number
}

const Home: React.FC<HomeProps> = (props) => {
    const { heigth = 24, width = 24, stroke = '#fff', strokeWidth = 2 } = props

    return (
        <svg width={width} height={heigth} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.7781 10.6875L19.875 8.78569V4.125C19.875 3.40312 19.2844 2.8125 18.5625 2.8125H17.25C16.5281 2.8125 15.9375 3.40312 15.9375 4.125V4.85081L13.3125 2.22844C12.9542 1.88981 12.6261 1.5 12 1.5C11.3739 1.5 11.0458 1.88981 10.6875 2.22844L2.22188 10.6875C1.81238 11.1141 1.5 11.4251 1.5 12C1.5 12.7389 2.067 13.3125 2.8125 13.3125H4.125V21.1875C4.125 21.9094 4.71562 22.5 5.4375 22.5H8.0625C8.78737 22.5 9.375 21.9124 9.375 21.1875V15.9375C9.375 15.2156 9.96562 14.625 10.6875 14.625H13.3125C14.0344 14.625 14.625 15.2156 14.625 15.9375V21.1875C14.625 21.9124 14.5564 22.5 15.2812 22.5H18.5625C19.2844 22.5 19.875 21.9094 19.875 21.1875V13.3125H21.1875C21.933 13.3125 22.5 12.7389 22.5 12C22.5 11.4251 22.1876 11.1141 21.7781 10.6875Z" stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
        </svg>
    )
}

export default Home