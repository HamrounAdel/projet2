import {createSlice}  from '@reduxjs/toolkit'
const  rdvSlice=createSlice({
    name:'RDV',
    initialState:([]),
    
    reducers:{
      setRDV:(state,action)=>{
        return  action.payload

      }
    }
})
export const  {setRDV}=rdvSlice.actions;
export default rdvSlice.reducer
