import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import {router} from "./app/providers/Router";
import './app/styles/index.scss';
import {StoreProvider} from "./app/providers/StoreProvider";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <StoreProvider>
        <RouterProvider router={router} />
    </StoreProvider>
);
