'use client';

import React, { createElement } from 'react';
import * as svgIcon from '../../../assets/icons';
import { Grid } from '@mui/material';

interface IconButtonProps {
    SourceElement: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    style?: React.CSSProperties;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    rectIconColor?: string | Record<string, any>;
    pathFill?: Record<string, any>;
    id?: string;
    stokeWidth?: number;
    height?: number;
    width?: number;
    compomentName?: string;
}

const defaultStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
};

const IconButton: React.FC<IconButtonProps> = ({
    SourceElement,
    style,
    rectIconColor,
    pathFill,
    onClick,
    onMouseEnter,
    onMouseLeave,
    stokeWidth,
    id,
    height,
    width,
    compomentName
}) => {
    return (
        <Grid
            onClick={(event) => onClick && onClick(event)}
            onMouseEnter={() => onMouseEnter && onMouseEnter()}
            onMouseLeave={() => onMouseLeave && onMouseLeave()}
            style={{ ...defaultStyles, ...style }}
            id={id}
        >
            {SourceElement &&
                <>
                    {createElement(compomentName ? svgIcon[compomentName][SourceElement] : svgIcon[SourceElement], {
                        id: SourceElement,
                        rectIconColor,
                        pathFill,
                        height,
                        width,
                        stokeWidth
                    })}
                </>
            }
        </Grid>
    );
};

export default IconButton;
