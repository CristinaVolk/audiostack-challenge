import React, { memo, useMemo, useState } from 'react';

import {SideBarItem} from "../SidebarItem/SidebarItem";
import {useSideBarItems} from "../../model/selectors/getSideBarItems";
import classes from "./Sidebar.module.scss";

import {VStack} from "@/shared/ui/Stack";
import {classNames} from "@/shared/helpers/classNames";
import {ImageComponent} from "@/shared/ui/ImageComponent/ImageComponent";
import { ReactComponent as ToggleIcon } from '../../../../shared/assets/icons/arrow-bottom.svg';


interface SideBarProps {
    className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    const sideBarItemsList = useSideBarItems();

    const itemsList = useMemo(
        () =>
            sideBarItemsList.map((item) => (
                <SideBarItem
                    item={item}
                    key={item.path}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sideBarItemsList],
    );

    return (
        <aside
            className={classNames(
                classes.SideBar,
                { [classes.collapsed]: collapsed },
                [className],
            )}
        >
            <VStack
                role="navigation"
                gap="15"
                className={classes.linkItems}
                align="center"
            >
                {itemsList}
            </VStack>
            <ToggleIcon
                onClick={onToggle}
                className={classNames(classes.toggle, {}, [])}
            />
        </aside>
    );
});
