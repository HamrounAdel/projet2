import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import rdvSlice from "./rdvSlice";
import doctorSlice from "./doctorSlice";
export default configureStore({
    reducer:{
        RDV:rdvSlice,
        Doctor:doctorSlice,
        User:userSlice,
        
     } 
})