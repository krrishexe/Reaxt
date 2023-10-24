import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './authSlice'
const store = configureStore({
    reducer:{
        authSliceReducer
    }
})//reducers
export default store;