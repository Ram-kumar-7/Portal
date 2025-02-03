import React from 'react'

interface PlacementProps {
    stroke?: string
    strokeWidth?: number
    width?: number
    heigth?: number
}

const Placement: React.FC<PlacementProps> = (props) => {
    const { heigth = 24, width = 24, stroke = '#fff', strokeWidth = 1.5 } = props

    return (
        <svg width={width} height={heigth} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4583 15.3333H18.4167M8.5 20H18.4167M22.5 7.16668V18.8333C22.5 22.3333 20.75 24.6667 16.6667 24.6667H7.33333C3.25 24.6667 1.5 22.3333 1.5 18.8333V7.16668C1.5 3.66668 3.25 1.33334 7.33333 1.33334H16.6667C20.75 1.33334 22.5 3.66668 22.5 7.16668ZM16.0833 1.33334V10.5033C16.0833 11.0167 15.4766 11.2733 15.1033 10.935L12.3967 8.43837C12.175 8.22837 11.825 8.22837 11.6033 8.43837L8.8967 10.935C8.52336 11.2733 7.91667 11.0167 7.91667 10.5033V1.33334H16.0833Z" stroke={stroke} strokeWidth={strokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Placement