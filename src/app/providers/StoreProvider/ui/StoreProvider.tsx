import React, { ReactNode, useMemo } from "react"
import { Provider } from "react-redux"

import { StateSchema } from "../config/StateSchema"
import { createReduxStore } from "../config/store"

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props

    const store = useMemo(() => createReduxStore(initialState), [initialState])

    return <Provider store={store}>{children}</Provider>
}
