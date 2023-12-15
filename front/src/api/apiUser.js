import axios from 'axios'

export const registerUser=async(values)=>{
    const ajoutUser= await axios.post('http://localhost:5003/auth/register',{...values})
}
export const getAccount = async()=>{
    const token =  localStorage.getItem('token')
    const {data} = await axios.get('http://localhost:5003/auth/moncompte',{headers:{Authorization:token}})
return data 
}
export const  getAllUser =async()=>{
    const {data} = await axios.get('http://localhost:5003/auth/getAll')
    return data
}
// export const searchDoctors=async()=>{
//     const {data} = await axios.get('http://localhost:5003/auth/searchDoctors')
//     return data
// }
export const putUser=async(id,values)=>{
    const updatUser= await axios.put(`http://localhost:5003/auth/updateprofil/${id}`,values)
}

export const deletUser=async(id)=>{
    const removUser= await axios.delete(`http://localhost:5003/auth/deletprofil/${id}`)
}
