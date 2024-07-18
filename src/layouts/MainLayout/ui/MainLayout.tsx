import React, { memo, ReactElement } from 'react';

import classes from './MainLayout.module.scss';

import { classNames } from '@/shared/helpers/classNames';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const {
        className,
        header,
        content,
        sidebar ,
        toolbar,
    } = props;

    return (
        <div className={classNames(classes.MainLayout, {}, [className])}>
            <div className={classes.header}>{header}</div>

            <div className={classes.contentLayout}>
                <div className={classes.content}>{content}</div>
                <div className={classes.sidebar}>{sidebar}</div>
                <div className={classes.rightbar}>
                    <div className={classes.toolbar}>{toolbar}</div>
                </div>
            </div>
        </div>
    );
});