import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
    name:'series',
    initialState:[],
    reducers:{
        getSeries(){},
        setSeries(state,action){
            const seriesData = action.payload;
            return seriesData
            // return [...state,...seriesData]
        }
    }
})

export const {getSeries,setSeries} = seriesSlice.actions;

export default seriesSlice.reducer;