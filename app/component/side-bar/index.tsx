'use client';

import { Box, Typography } from '@mui/material'
import styles from './SideBar.module.css'
import IconButton from '../common/buttons/icon-button'
import Link from 'next/link'
import { SideBarFields } from '@/app/assets/section-fields/side-bar';


interface Props {
    routhPath?: string,
    isMaxWidth?: boolean,
    isMobile?: boolean,
    setIsMaxWidth?: (layout: boolean) => void,
}

const SideBar = (props: Props) => {

    const { routhPath, isMaxWidth, isMobile = false, setIsMaxWidth } = props

    const handleOnclick = () => {
        setIsMaxWidth && setIsMaxWidth(!isMaxWidth)
    }
    return (
        <Box className={`${styles.sideBarContainer} ${!isMaxWidth ? styles.shrunk : ''}`}>
            <div className={styles.titleCon}>
                <div className={`${styles.titleBar} ${!isMaxWidth ? styles.none : ''}`}>
                    <Typography className={styles.titleText}>{SideBarFields.appName}</Typography>
                </div>
                <IconButton
                    id={!isMaxWidth ? `sideBar-${SideBarFields.sideBarClosingIcon}` : `sideBar-${SideBarFields.sideBarOpeningIcon}`}
                    height={30}
                    width={30}
                    SourceElement={!isMaxWidth ? SideBarFields.sideBarClosingIcon : SideBarFields.sideBarOpeningIcon}
                    onClick={handleOnclick}
                    compomentName={'SideBarIcons'}
                />
            </div>
            <div className={styles.sideBarListFields}>
                {
                    SideBarFields.fields.map(fields => (
                        !fields.permissonCheck &&
                        <Link href={`${routhPath}${fields.routePath}`} id={`sideBar-list-${fields.id}`} className={`${styles.sideBarLinks} ${!isMaxWidth ? styles.sideBarLinksShrunk : ''}`} key={`sideBar-list-${fields.id}`} onClick={(isMobile && isMaxWidth) ? handleOnclick : undefined}>
                            <IconButton
                                id={`sideBar-icon-list-${fields.id}`}
                                height={16}
                                width={16}
                                SourceElement={fields.iconName}
                                compomentName={'SideBarIcons'}
                            />
                            <div className={`${!isMaxWidth ? styles.none : ''}`}>
                                <Typography className={`${styles.sideBarListText} ${!isMaxWidth ? styles.none : ''}`}>{fields.value}</Typography>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </Box>
    )
}

export default SideBar