import axios from 'axios'

export const  getAllRDV=async()=>{
    const {data} = await axios.get('http://localhost:5003/RDV/getRDV')
    return data
}
// export const  getUniqueRdv=async()=>{
// const resposne = await axios.get("/api/user/get-appointments-by-user-id", {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });}

 

export const addRDV=async(values)=>{
    const ajoutRdv= await axios.post('http://localhost:5003/RDV/addRDV',{...values})
}

/*
export const putRDV=async(id,values)=>{
    const updatContact= await axios.put(`http://localhost:5002/contact/updatContact/${id}`,values)
}*/

export const deletRDV=async(id)=>{
    const removContact= await axios.delete(`http://localhost:5003/RDV/deletRDV/${id}`)
}
