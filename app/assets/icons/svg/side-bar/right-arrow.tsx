import React from 'react'

interface RightArrowProps {
    stroke?: string
    strokeWidth?: number
    width?: number
    heigth?: number
}

const RightArrow: React.FC<RightArrowProps> = (props) => {
    const { heigth = 24, width = 24, stroke = '#fff', strokeWidth = 2 } = props

    return (
        <svg width={width} height={heigth} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_2_100)">
                <path d="M15.9 26.5164L7.5 17.883L15.9 9.2497M28.5 26.5164L20.1 17.883L28.5 9.2497" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_d_2_100" x="-4" y="0" width="44" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_100" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_100" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export default RightArrow