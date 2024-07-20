import React, { memo } from 'react';
import {NavLink} from "react-router-dom";

import {SideBarItemType} from "../../model/types/sidebar";
import classes from "./SidebarItem.module.scss";

import {classNames} from "@/shared/helpers/classNames";


type SideBarItemProps = {
    item: SideBarItemType;
    collapsed: boolean;
};

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
    const { text } = item;


    return (
        <li className={classNames(classes.item, {
            [classes.collapsedRedesigned]: collapsed,
        })}
        >
            <NavLink to={item.path}>
                <h2 className={classes.link}>{text}</h2>
            </NavLink>
        </li>

    );
});
