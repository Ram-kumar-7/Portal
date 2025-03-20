import React from 'react'

interface TrophyProps {
    pathFill?: string
    stroke?: string
    strokeWidth?: number
    width?: number
    heigth?: number
}

const Trophy: React.FC<TrophyProps> = (props) => {
    const { pathFill = "#D9D9D9", heigth = 24, width = 24 } = props

    return (
        <svg width={width} height={heigth} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_59_172)">
                <path d="M13.9249 18.25C13.9249 17.8358 13.5891 17.5 13.1749 17.5C12.7607 17.5 12.4249 17.8358 12.4249 18.25H13.9249ZM12.4249 20.7C12.4249 21.1142 12.7607 21.45 13.1749 21.45C13.5891 21.45 13.9249 21.1142 13.9249 20.7H12.4249ZM7.34155 24.6667H6.59155V25.4167H7.34155V24.6667ZM19.0082 24.6667V25.4167H19.7582V24.6667H19.0082ZM6.17488 23.9167C5.76067 23.9167 5.42488 24.2525 5.42488 24.6667C5.42488 25.0809 5.76067 25.4167 6.17488 25.4167V23.9167ZM20.1749 25.4167C20.5891 25.4167 20.9249 25.0809 20.9249 24.6667C20.9249 24.2525 20.5891 23.9167 20.1749 23.9167V25.4167ZM5.38155 12.5917L5.15297 13.306C5.43288 13.3956 5.73932 13.3134 5.93686 13.0958C6.13441 12.8782 6.18664 12.5652 6.07049 12.2953L5.38155 12.5917ZM3.12988 11.1917L2.57241 11.6934C2.58121 11.7032 2.59026 11.7127 2.59955 11.722L3.12988 11.1917ZM5.05488 4.07501L5.74269 4.37405C5.84349 4.14222 5.82071 3.8752 5.68209 3.66378C5.54348 3.45237 5.30769 3.32501 5.05488 3.32501V4.07501ZM4.70488 9.32501H5.45488H4.70488ZM20.6182 12.5917L19.9293 12.2953C19.8131 12.5652 19.8654 12.8782 20.0629 13.0958C20.2604 13.3134 20.5669 13.3956 20.8468 13.306L20.6182 12.5917ZM22.8699 11.1917L23.4002 11.722C23.4095 11.7127 23.4186 11.7032 23.4274 11.6934L22.8699 11.1917ZM20.9449 4.07501V3.32501C20.6921 3.32501 20.4563 3.45237 20.3177 3.66378C20.1791 3.8752 20.1563 4.14222 20.2571 4.37405L20.9449 4.07501ZM21.2949 9.32501H22.0449H21.2949ZM12.4249 18.25V20.7H13.9249V18.25H12.4249ZM7.34155 25.4167H19.0082V23.9167H7.34155V25.4167ZM19.7582 24.6667V23.5H18.2582V24.6667H19.7582ZM19.7582 23.5C19.7582 21.8025 18.3724 20.4167 16.6749 20.4167V21.9167C17.544 21.9167 18.2582 22.6309 18.2582 23.5H19.7582ZM16.6749 20.4167H9.67488V21.9167H16.6749V20.4167ZM9.67488 20.4167C7.97734 20.4167 6.59155 21.8025 6.59155 23.5H8.09155C8.09155 22.6309 8.80576 21.9167 9.67488 21.9167V20.4167ZM6.59155 23.5V24.6667H8.09155V23.5H6.59155ZM6.17488 25.4167H20.1749V23.9167H6.17488V25.4167ZM12.9999 16.9167C8.8991 16.9167 5.58322 13.6008 5.58322 9.50001H4.08322C4.08322 14.4292 8.07067 18.4167 12.9999 18.4167V16.9167ZM5.58322 9.50001V6.00001H4.08322V9.50001H5.58322ZM5.58322 6.00001C5.58322 3.83589 7.33576 2.08334 9.49988 2.08334V0.583344C6.50734 0.583344 4.08322 3.00746 4.08322 6.00001H5.58322ZM9.49988 2.08334H16.4999V0.583344H9.49988V2.08334ZM16.4999 2.08334C18.664 2.08334 20.4165 3.83589 20.4165 6.00001H21.9165C21.9165 3.00746 19.4924 0.583344 16.4999 0.583344V2.08334ZM20.4165 6.00001V9.50001H21.9165V6.00001H20.4165ZM20.4165 9.50001C20.4165 13.6008 17.1007 16.9167 12.9999 16.9167V18.4167C17.9291 18.4167 21.9165 14.4292 21.9165 9.50001H20.4165ZM5.61013 11.8774C4.86494 11.6389 4.19513 11.1963 3.66021 10.6613L2.59955 11.722C3.27796 12.4004 4.14816 12.9845 5.15297 13.306L5.61013 11.8774ZM3.68735 10.69C2.72637 9.6222 2.12988 8.39343 2.12988 6.99168H0.629883C0.629883 8.85659 1.43339 10.4278 2.57241 11.6934L3.68735 10.69ZM2.12988 6.99168C2.12988 5.77256 3.07743 4.82501 4.29655 4.82501V3.32501C2.249 3.32501 0.629883 4.94413 0.629883 6.99168H2.12988ZM4.29655 4.82501H5.05488V3.32501H4.29655V4.82501ZM4.36708 3.77597C4.08928 4.4149 3.95488 5.11278 3.95488 5.82501H5.45488C5.45488 5.30058 5.55382 4.80845 5.74269 4.37405L4.36708 3.77597ZM3.95488 5.82501V9.32501H5.45488V5.82501H3.95488ZM3.95488 9.32501C3.95488 10.5987 4.22271 11.7959 4.69261 12.8881L6.07049 12.2953C5.67706 11.3808 5.45488 10.3847 5.45488 9.32501H3.95488ZM20.8468 13.306C21.8516 12.9845 22.7218 12.4004 23.4002 11.722L22.3396 10.6613C21.8046 11.1963 21.1348 11.6389 20.3896 11.8774L20.8468 13.306ZM23.4274 11.6934C24.5664 10.4278 25.3699 8.85659 25.3699 6.99168H23.8699C23.8699 8.39343 23.2734 9.6222 22.3124 10.69L23.4274 11.6934ZM25.3699 6.99168C25.3699 4.94413 23.7508 3.32501 21.7032 3.32501V4.82501C22.9223 4.82501 23.8699 5.77256 23.8699 6.99168H25.3699ZM21.7032 3.32501H20.9449V4.82501H21.7032V3.32501ZM20.2571 4.37405C20.446 4.80845 20.5449 5.30058 20.5449 5.82501H22.0449C22.0449 5.11277 21.9105 4.4149 21.6327 3.77597L20.2571 4.37405ZM20.5449 5.82501V9.32501H22.0449V5.82501H20.5449ZM20.5449 9.32501C20.5449 10.3847 20.3227 11.3808 19.9293 12.2953L21.3072 12.8881C21.7771 11.7959 22.0449 10.5987 22.0449 9.32501L20.5449 9.32501Z" fill="white"/>
            </g>
        </svg>
    )
}

export default Trophy