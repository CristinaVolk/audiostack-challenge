import React from 'react';
import {Outlet} from "react-router";

import {MainLayout} from "@/layouts/MainLayout";
import {Navbar} from "@/widgets/Navbar";
import {SideBar} from "@/widgets/Sidebar";
import {SearchArtists} from "@/features/SearchArtists";
import {useCheckMobileScreen} from "@/shared/hooks/useCheckMobileScreen";


export function App() {
    const isMobile = useCheckMobileScreen()

    if (isMobile) {
        return (
            <MainLayout
                header={<SearchArtists />}
                content={<Outlet />}
                sidebar={<SideBar />}
            />
        )
    }

    return (
        <MainLayout
            header={<Navbar />}
            content={<Outlet />}
            sidebar={<SideBar />}
            toolbar={<SearchArtists />}
        />
    );
}
