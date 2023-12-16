import React ,{useState,useEffect}from 'react'
import '../css/profilDoctor.css'
import {useSelector,useDispatch}from 'react-redux'
import { useNavigate , useParams} from 'react-router-dom'
import Navigation from '../../navbar/Navigation'
import { putDoctor } from '../../../api/apiDoctor'
function ProfilDoctor() {
  const auth = useSelector(state => state.User)
  console.log('dgfjhk',auth)
  const doct = useSelector(state => state.Doctor)
  console.log('dgfjhk',doct)
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const {id}=useParams()
  const[name,setName]=useState('')
  const[lastName,setLastName]=useState('')
  const[email,setEmail]=useState('')
  const[adress,setAdress]=useState('')
  const[phone,setPhone]=useState('')
  const[specialite,setSpecialite]=useState('')
  const[password,setPassword]=useState('')
  const[show,setShow]=useState(false)
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  useEffect(() => {
    setName(doct.name);
    setLastName(doct.lastName);
    setEmail(doct.email);
    setAdress(doct.adress);
    setPhone(doct.phone);
    setPassword(doct.password);
    setSpecialite(doct.specialite)
    setNewPassword('');
    setConfirmPassword('')
  }, [doct]);


  const logoutdoct = () => {
    localStorage.removeItem('token');
    navigate('/login/Doctor');
  };

  const handelShow = () => {
    setShow(!show);
  };

  const handelupdate = async () => {
    // Utilisez les états locaux mis à jour
    if (newPassword !== confirmPassword) {
      alert("Les nouveaux mots de passe ne correspondent pas.");
      return;
    }
    const updatedData = {
      name,
      lastName,
      email,
      adress,
      phone,
      specialite,
      password,
      newPassword,
      confirmPassword
    };
    try {
    await putDoctor(doct._id, updatedData);
    setShow(false);
    alert("modifier avec succès !");
   
  }catch (err){
console.log(err)
  }
  
  };


  return (
    <div>
      <Navigation  auth={auth} logoutdoct={logoutdoct} doct={doct}/>
      <div className='bodyprofile ' >

     
    {/* <div className="container">
    <div className="main-body"> */}
      <div className=" Container">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  alt="Admin"
                  className="rounded-circle p-1 bg-primary"
                  width={110}
                />
                <div className="mt-3">
                  <h4>{`${doct.name} ${doct.lastName}`}</h4>
                  <p className="">{`Medecine ${doct.specialite}`}</p>
                  <p className="">
                    {doct.address}
                  </p>
                  <button className="btn btn-primary">Follow</button>
                  <button className="btn btn-outline-primary">Message</button>
                </div>
              </div>
              <hr className="my-4" />
             
            </div>
          </div>
        </div>
        <div className='designe'>
        <div className="col-lg-8">
          <div className="card">
          <div className="card-header">Account Details</div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={doct.name}
                  
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Last Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={doct.lastName}
                  
                    onChange={(e)=>setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={doct.email}
                onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={doct.phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Specialite</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={doct.specialite}
                  
                    onChange={(e)=>setSpecialite(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={doct.adress}
                  onChange={(e)=>setAdress(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3" />
                <div className="col-sm-9 text-secondary">
                  <input
                    type="button"
                    className="btn btn-primary px-4"
                    defaultValue="Save Changes"
                    onClick={()=>handelupdate()}
                  />
                </div>
              </div>
              
            </div>
          </div>
         
          </div>
        </div>
      </div>
    </div>
  </div>
  // </div>
  //  </div>
  
  )
}

export default  ProfilDoctor
