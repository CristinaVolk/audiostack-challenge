import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import classes from './Flex.module.scss';
import {classNames} from "../../../helpers/classNames";


type FlexJustify = 'start' | 'center' | 'end' | 'between';
type FlexAlign = 'start' | 'center' | 'end';
type FlexWrap = 'wrap' | 'nowpap';
export type FlexDirection = 'row' | 'column';
type FlexGap = '5' | '10' | '15' | '20' | '25' | '30';

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps {
    className?: string;
    children?: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
    wrap?: FlexWrap;
}

const justifyClasses: Record<FlexJustify, string> = {
    start: classes.justifyStart,
    end: classes.justifyEnd,
    center: classes.justifyCenter,
    between: classes.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: classes.alignStart,
    end: classes.alignEnd,
    center: classes.alignCenter,
};

const directionClasses: Record<FlexDirection, string> = {
    row: classes.directionRow,
    column: classes.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    5: classes.gap5,
    10: classes.gap10,
    15: classes.gap15,
    20: classes.gap20,
    25: classes.gap25,
    30: classes.gap30,
};

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max,
        wrap = 'nowrap',
        ...restProps
    } = props;

    const flexClasses = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
        classes[wrap],
    ];

    const modes = {
        [classes.max]: max,
    };

    return (
        <div
            className={classNames(classes.Flex, modes, [...flexClasses])}
            {...restProps}
        >
            {children}
        </div>
    );
};
