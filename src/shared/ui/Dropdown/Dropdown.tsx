import React, { ReactNode} from 'react';

import classes from './Dropdown.module.scss';
import popupClasses from './popup.module.scss';
import {classNames} from "../../helpers/classNames";

type DropdownDirection =
    | 'top'
    | 'bottom'
    | 'topRight'
    | 'topLeft'
    | 'bottomLeft'
    | 'bottomRight';

interface DropdownItem {
    id: number;
    itemActive?: boolean;
    content?: ReactNode;
    onClick?: () => void;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction: DropdownDirection;
    customOpen?: boolean;
    onTriggerClick?: () => void;
}

export const Dropdown = (props: DropdownProps) => {
    const {
        className,
        trigger,
        items,
        direction = 'bottom',
        customOpen,
        onTriggerClick,
    } = props;
    const menuClasses = [popupClasses[direction]];

    function buttonClicked() {
        onTriggerClick?.()
    }

    return (
        <div className={classNames(classes.Dropdown, {}, [className])}
        >
            <button className={classes.btn} onClick={buttonClicked}>
                {trigger}
            </button>

            {customOpen && (
                <ul
                    className={classNames(classes.menu, {[classes.open]: customOpen}, [...menuClasses])}
                >
                    {items.map((item) => {
                        const content = (
                            <div className={classes.menuNavLink}>
                                {item.content}
                            </div>
                        );

                        return (
                            <li key={item.id}>
                                {content}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
