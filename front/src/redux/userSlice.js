import { createSlice } from "@reduxjs/toolkit";
const userSlice =createSlice({
    name:'User',
    initialState: ([
//         {
//          name:"Dr.Haddad",
//        lastName:"nawfel",
//        email:"Haddad@gmail.fr",
//         password:"adeladel",
//         adress:"mednine",
//          phone:"12345678",
//          role:"Patient",
//        birthday:"12/04/1983",
// //         specialite:"Orthopédiste",
//         numOrder:"12345",
// },
]),

reducers:{
setUser:(state,action)=>{
 return  action.payload

}
}
})
export const  {setUser}=userSlice.actions;
export default userSlice.reducer