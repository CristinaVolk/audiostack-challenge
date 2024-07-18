import React from 'react';
import {Outlet} from "react-router";

import {MainLayout} from "@/layouts/MainLayout";
import {Navbar} from "@/widgets/Navbar";

import {SearchArtists} from "@/features/SearchArtists";


export function App() {
  return (
          <MainLayout
              header={<Navbar />}
              content={<Outlet />}
              sidebar={<h1>Navigation</h1>}
              toolbar={<SearchArtists />}
          />
  );
}
