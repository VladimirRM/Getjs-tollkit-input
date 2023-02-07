import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "../features/userSlice2";

 export const store = configureStore({
    reducer:{
        user:userSlice
    }
})