import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
    name: "article",
    initialState:{
      articles:[]
    },

    reducers:{
        setArticles:(state, action) =>{
            state.articles = action.payload;
        }
    }
});

export const {setArticles} = articlesSlice.actions;

export default articlesSlice.reducer;