import axios from 'axios'

//get tous les rdvs
export const  getAllRDV=async()=>{
    const {data} = await axios.get('http://localhost:5003/RDV/getAll')
    return data
}
//get rdv byId
export const getRdvById=async(idRdv)=>{
    const {data}= await axios.get(`http://localhost:5003/RDV/getUnique/${idRdv}`)
    return data
}
//get rdv by doctorId
export const getRdvByDoctorId=async(doctorId)=>{
    const {data}= await axios.get(`http://localhost:5003/RDV/getbyDoctor/${doctorId}`)
    return data
}
//get Rdv by userId
export const getRdvByUserId=async(userId)=>{
    const {data}= await axios.get(`http://localhost:5003/RDV/getbyUser/${userId}`)
    return data
}
// ajout de rdv
export const  addingRdv=async(userId,doctorId,value)=>{
    const adding = await axios.post(`http://localhost:5003/RDV/addRDV`,userId,doctorId,{...value})
    
    }
//update rdv 
    export const patchRdv=async(id,values)=>{
        const updatRdv= await axios.patch(`http://localhost:5003/RDV/updatrdv/${id}`,values)
    }

// delete rdv 
export const deletRDV=async(idRdv)=>{
    const removContact= await axios.delete(`http://localhost:5003/RDV/deletRDV/${idRdv}`)
}
