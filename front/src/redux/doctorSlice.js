import { createSlice } from "@reduxjs/toolkit";
 const doctorSlice = createSlice({
  name: "Doctor",
  initialState: ([]),
    
  reducers: {
    setDoctor: (state,action) => {
      return  action.payload
    },
    
  },
});

export const { setDoctor} = doctorSlice.actions;
export default doctorSlice.reducer