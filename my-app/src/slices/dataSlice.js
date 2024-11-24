import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";


const dataSlice = createSlice({
    name: "data",
    // в initialState мы указываем начальное состояние нашего глобального хранилища
    initialState: {
        Data: "",
    },
    // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
    reducers: {
        setData(state, {payload}) {
            state.Data = payload
        }
    }
})

export const useData = () =>
    useSelector((state) => state.ourData.Data)


export const {
    setData: setDataAction
} = dataSlice.actions


export default dataSlice.reducer