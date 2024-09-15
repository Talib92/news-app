import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState:{
        theme:"Light",
    },
    reducers:{
        // setTheme:(state, action) =>{
        //     state.theme = action .payload;
        // },
        toggleTheme:(state, action) =>{
            state.theme = state.theme === "Light" ? "Dark" : "Light"
        }
    }
});

export const {setTheme, toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;