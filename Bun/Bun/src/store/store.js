import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
const store = configureStore({
    reducer:{
        auth:authSlice,
    }
})//reducers
export default store;