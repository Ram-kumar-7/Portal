import React from 'react';

interface SkillTest {
    stroke?: string
    strokeWidth?: number
    width?: number
    heigth?: number
}

const SkillTest: React.FC<SkillTest> = (props) => {
    const { heigth = 24, width = 24, stroke = '#fff', strokeWidth = 2 } = props

    return (
        <svg width={width} height={heigth} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.14722 10.5653L19.6717 10.5652C22.0726 10.5652 24.0189 8.60304 24.0189 6.1826C24.0189 3.76215 22.0726 1.79999 19.6717 1.79999L6.14722 1.80008M6.14722 10.5653C3.74634 10.5653 1.80005 8.60313 1.80005 6.18269C1.80005 3.76224 3.74634 1.80008 6.14722 1.80008M6.14722 10.5653C8.5481 10.5653 10.4944 8.60313 10.4944 6.18269C10.4944 3.76224 8.5481 1.80008 6.14722 1.80008M19.8529 15.4348H6.14722C3.74634 15.4348 1.80005 17.3969 1.80005 19.8174C1.80005 22.2378 3.74634 24.2 6.14722 24.2H19.8529M19.8529 15.4348C22.2538 15.4348 24.2 17.3969 24.2 19.8174C24.2 22.2378 22.2538 24.2 19.8529 24.2M19.8529 15.4348C17.452 15.4348 15.5057 17.3969 15.5057 19.8174C15.5057 22.2378 17.452 24.2 19.8529 24.2" stroke={stroke} strokeWidth={strokeWidth} />
        </svg>
    )
}

export default SkillTest