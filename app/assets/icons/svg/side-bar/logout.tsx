import React from 'react'

interface LogoutProps {
    stroke?: string
    strokeWidth?: number
    width?: number
    heigth?: number
}

const Logout: React.FC<LogoutProps> = (props) => {
    const { heigth = 24, width = 24, stroke = '#fff', strokeWidth = 1.5 } = props

    return (
        <svg width={width} height={heigth} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.35 9.34011C10.815 3.94011 13.59 1.73511 19.665 1.73511H19.86C26.565 1.73511 29.25 4.42011 29.25 11.1251V20.9051C29.25 27.6101 26.565 30.2951 19.86 30.2951H19.665C13.635 30.2951 10.86 28.1201 10.365 22.8101M19.5 16.0001H2.43M5.775 10.9751L0.75 16.0001L5.775 21.0251" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Logout