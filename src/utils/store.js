import { configureStore } from "@reduxjs/toolkit"
import articlesSlice from "./articlesSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
    reducer:{
        article:articlesSlice,
        theme:themeSlice
    }
})

export default store;