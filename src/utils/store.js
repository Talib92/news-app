import { configureStore } from "@reduxjs/toolkit"
import articlesSlice from "./articlesSlice";

const store = configureStore({
    reducer:{
        article:articlesSlice,
    }
})

export default store;