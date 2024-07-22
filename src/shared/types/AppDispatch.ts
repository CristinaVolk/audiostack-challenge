import { createReduxStore } from "@/app/providers/StoreProvider/config/store"

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
