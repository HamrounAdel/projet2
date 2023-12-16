import axios from 'axios'
import moment from'moment'
export const registerDoctor=async(values)=>{
  const ajoutUser= await axios.post('http://localhost:5003/doctor/register',{...values})
}

export const getAccountDoct = async()=>{
    const token =  localStorage.getItem('token')
    const {data} = await axios.get('http://localhost:5003/doctor/moncompte',{headers:{Authorization:token}})
return data 
}
export const  getAllDoctor =async()=>{
  const {data} = await axios.get('http://localhost:5003/doctor/getAll')
  return data
}

export const putDoctor=async(id,values)=>{
  const updatUser= await axios.put(`http://localhost:5003/doctor/updateprofil/${id}`,values)
}










// export const  postDoctor=async(values)=>{
//     const response = await axios.post("/api/user/apply-doctor-account",{
//       ...values,
//       timings: [
//         moment(values.timings[0]).format("HH:mm"),
//         moment(values.timings[1]).format("HH:mm"),
//       ],
//     },
//     {headers: { Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     }
//   )}