import React from 'react'
import { useLocation } from "react-router";


import {AppRouterByPathPattern} from "@/shared/consts/router";
import {VStack} from "@/shared/ui/Stack";


export const AboutPage = () => {
    const {pathname} = useLocation()
    const pageTitle = AppRouterByPathPattern[pathname];

    return (
        <VStack max gap="30" align='center'>
            <h1>{pageTitle}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar mattis sem nec volutpat. Donec
                nec urna est. Phasellus dapibus sapien at libero egestas consectetur. Sed eu eros arcu. Nulla a interdum
                est. Morbi volutpat massa malesuada ipsum varius luctus. Mauris maximus sit amet tortor eu pellentesque.
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin varius tortor sapien, vel volutpat
                neque fermentum ac.

                Praesent fringilla quis orci vel sodales. Proin nec feugiat velit. Integer eget ante quis justo
                consectetur rhoncus et at metus. Donec eu sapien nisl. Praesent elementum porta semper. Etiam non est
                risus. Cras eu consectetur ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Etiam scelerisque metus urna, vitae sodales est elementum sagittis. Praesent at
                auctor risus. Nam pellentesque tincidunt ligula ut bibendum. Phasellus eget diam nec felis tempus
                finibus eu et erat. Aliquam euismod massa ipsum, condimentum ullamcorper urna cursus nec. Donec lacinia
                turpis massa, non tempus nunc porttitor sit amet.

                Generated 2 paragraphs, 163 words, 1092 bytes of Lorem Ipsum
            </p>
        </VStack>
    )
}