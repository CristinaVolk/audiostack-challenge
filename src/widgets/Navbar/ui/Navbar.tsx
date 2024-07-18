import React from 'react';

import classes from "./Navbar.module.scss";

import {ImageComponent} from "@/shared/ui/ImageComponent/ImageComponent";
import {classNames} from "@/shared/helpers/classNames";

const imgSrc = 'assets/images/navbar-cover.jpeg'

export const Navbar = () => {

    return (
        <div className={classNames(classes.Navbar, {} , [])}>
            <ImageComponent
                src={imgSrc}
                alt='navbar-cover'
            />
        </div>
    )
}