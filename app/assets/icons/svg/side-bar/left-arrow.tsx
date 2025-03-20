import React from 'react'

interface LeftArrowProps {
    stroke?: string
    strokeWidth?: number
    width?: number
    heigth?: number
}

const LeftArrow: React.FC<LeftArrowProps> = (props) => {
    const { heigth = 24, width = 24, stroke = '#fff', strokeWidth = 2 } = props

    return (
        <svg width={width} height={heigth} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_2_178)">
                <path d="M20.1 10.4836L28.5 19.1169L20.1 27.7502M7.5 10.4836L15.9 19.1169L7.5 27.7502" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_d_2_178" x="-4" y="0" width="44" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_178" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_178" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export default LeftArrow