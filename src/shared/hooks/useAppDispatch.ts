import {useDispatch} from "react-redux";
import {AppDispatch} from "@/shared/types/AppDispatch";

export const useAppDispatch = () => useDispatch<AppDispatch>();