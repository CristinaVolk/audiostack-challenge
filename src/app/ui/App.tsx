import React from 'react';
import {Outlet} from "react-router";

import {MainLayout} from "@/layouts/MainLayout";
import {Navbar} from "@/widgets/Navbar";
import {SearchArtists} from "@/features/SearchArtists";
import {SideBar} from "@/widgets/Sidebar";


export function App() {
  return (
          <MainLayout
              header={<Navbar />}
              content={<Outlet />}
              sidebar={<SideBar />}
              toolbar={<SearchArtists />}
          />
  );
}
