// modules/Layout.js
'use client'
import { Box, useMediaQuery } from '@mui/material'
import SideBar from '../component/side-bar'
import styles from './page.module.css'
import { useEffect, useState } from 'react';

const Layout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {


    const isMobile = useMediaQuery('(max-width:700px)')

    const [isMaxWidth, setIsMaxWidth] = useState(isMobile)
    console.log(isMobile)
    useEffect(() => { setIsMaxWidth(!isMobile) }, [isMobile])

    const renderChildern = () => {
        if (isMobile) {
            if (isMaxWidth) return null
        }
        return <div className={styles.childrenContainer}>
            {children}
        </div>
    }

    return (
        <Box className={styles.layoutContainer}>
            <SideBar routhPath={'/modules'} isMaxWidth={isMaxWidth} setIsMaxWidth={setIsMaxWidth} isMobile={isMobile} />
            {renderChildern()}
        </Box>
    )
}

export default Layout
