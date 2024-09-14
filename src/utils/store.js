import { configureStore } from "@reduxjs/toolkit"
import articlesSlice from "./articlesSlice";

const store = configureStore({
    reducer:{
        articles:articlesSlice.reducer,
    }
})

export default store;