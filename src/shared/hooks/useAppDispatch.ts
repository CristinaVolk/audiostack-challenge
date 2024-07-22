import { useDispatch } from "react-redux"
import type { AppDispatch } from "@/shared/types/AppDispatch"

export const useAppDispatch = () => useDispatch<AppDispatch>()
