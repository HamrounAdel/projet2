import React ,{useState,useEffect}from 'react'
import '../css/profilePatient.css'
import {useSelector,useDispatch}from 'react-redux'
import { useNavigate , useParams} from 'react-router-dom'
import {putUser} from '../../../api/apiUser'
import Navigation from '../../navbar/Navigation'
import { setUser } from '../../../redux/userSlice'
function Profile() {
  const auth = useSelector(state => state.User)
  console.log('dgfjhk',auth)
  const[userlist,setUserList]=useState([])
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const {id}=useParams()
  const[name,setName]=useState('')
  const[lastName,setLastName]=useState('')
  const[email,setEmail]=useState('')
  const[birthday,setBirthday]=useState('')
  const[adress,setAdress]=useState('')
  const[phone,setPhone]=useState('')
  const[password,setPassword]=useState('')
  const[show,setShow]=useState(false)
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  useEffect(() => {
    setName(auth.name);
    setLastName(auth.lastName);
    setEmail(auth.email);
    setAdress(auth.adress);
    setPhone(auth.phone);
    setBirthday(auth.birthday);
    setPassword(auth.password);
    setNewPassword('');
    setConfirmPassword('')
  }, [auth]);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handelShow = () => {
    setShow(!show);
  };

  const handelupdate = async () => {
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
      birthday,
      password,
      newPassword,
      confirmPassword
    };
    await putUser(auth._id, updatedData);
   
    setShow(false);
    alert("modifier avec succès !");
  };

  return (
    <div>
       
    <div className='bodyprofile '>
    <Navigation  auth={auth} logout={logout}/> 
    <div className="container-xl px-4 mt-4">
   
  <hr className="mt-0 mb-4" />
  <div>
  <div className='Container'>
  {/* <div className="row  "> */}
    <div className="col-xl-4">
      {/* Profile picture card*/}
      <div className="card mb-4 mb-xl-0">
        <div className="card-header">Profile Picture</div>
        <div className="card-body text-center">
          {/* Profile picture image*/}
          <img
            className="img-account-profile rounded-circle mb-2"
            src="http://bootdey.com/img/Content/avatar/avatar1.png"
            // src={selectedFile}
            alt="Profile"
          />
          {/* Profile picture help block*/}
          <div className="small font-italic text-muted mb-4">
            JPG or PNG no larger than 5 MB
          </div>
          {/* Profile picture upload button*/}
          {/* <input type="file"
          accept="image/*"
           onChange={handleFileChange} /> */}
          <button className="btn btn-primary" type="button" >
            Upload new image
          </button>
        </div>
      </div>
    </div>
    {/* </div> */}
    
    
    
    <div className='designe'>
    <div className="col-xl-8 ">
      {/* Account details card*/}
      <div className="card mb-4 ">
        <div className="card-header">Account Details</div>
        <div className="card-body">
          <form>
            {/* Form Group (username)*/}
            <div className="mb-3">
              <label className="small mb-1" htmlFor="inputUsername">
               UserName
              </label>
              
              <input
                className="form-control"
                id="inputUsername"
                type="text"
                placeholder="Enter your name"
                defaultValue={`${auth.name} ${auth.lastName}`}
                onChange={`${(e)=>setName(e.target.value)} ${(e)=>setLastName(e.target.value)}`}
              />
            </div>


            {/* Form Row*/}
            <div className="row gx-3 mb-3">
              {/* Form Group (first name)*/}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputFirstName">
                  FirstName
                </label>
                <input
                  className="form-control"
                  id="inputFirstName"
                  type="text"
                  placeholder="Enter your last name"
                  defaultValue={auth.name}
                  
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
              {/* Form Group (last name)*/}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputLastName">
                  LastName
                </label>
                <input
                  className="form-control"
                  id="inputLastName"
                  type="text"
                  placeholder="Enter your last name"
                  defaultValue={auth.lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                />
              </div>
            </div>

            {/* Form Row        */}
            <div className="row gx-3 mb-3">
              {/* Form Group (organization name)*/}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputOrgName">
                  Adress
                </label>
                <input
                  className="form-control"
                  id="inputOrgName"
                  type="text"
                  placeholder="Enter your adress"
                  defaultValue={auth.adress}
                  onChange={(e)=>setAdress(e.target.value)}
                />
              </div>
              {/* Form Group (location)*/}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputLocation">
                Date de naissance
                </label>
                <input
                  className="form-control"
                  id="inputLocation"
                  type="txt"
                  placeholder="Enter  your birthday"
                  defaultValue={auth.birthday}
                  onChange={(e)=>setBirthday(e.target.value)}
                />
              </div>
            </div>


            <div className="row gx-3 mb-3">
            {/* Form Group (email address)*/}
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputEmailAddress">
                Email address
              </label>
              <input
                className="form-control"
                id="inputEmailAddress"
                type="email"
                placeholder="Enter your email address"
                defaultValue={auth.email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputPhone">
                  Phone number
                </label>
                <input
                  className="form-control"
                  id="inputPhone"
                  type="tel"
                  placeholder="Enter your phone number"
                  defaultValue={auth.phone}
                  onChange={(e)=>setPhone(e.target.value)}
                />
              </div>
              </div>


            {/* Form Row*/}
             <div className="row gx-3 mb-3">
              {/* Form Group (password)*/}
               <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputBirthday"
                   onClick={handelShow}>
                  Changement de password 
                </label>
                {show && <div>
                  <label className="small mb-1" htmlFor="inputPhone">
                  Ancien mot de passe
                </label>
                  <input
                  className="form-control"
                  id="inputBirthday"
                  type="password"
                  name="password"
                  placeholder="Enter password actuel"
                  defaultValue={auth.password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <label className="small mb-1" htmlFor="inputPhone">
                 nouveau mot de passe
                </label>
                <input
                  className="form-control"
                  id="inputBirthday"
                  type="password"
                  name="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e)=>setNewPassword(e.target.value)}
                />
                <label className="small mb-1" htmlFor="inputPhone">
                  comfirmer mot de passe
                </label>
                 <input
                  className="form-control"
                  id="inputBirthday"
                  type="password"
                  name="password"
                  placeholder="Enter new password"
                  value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                />
                  </div>}
              </div>
          </div>
            
            {/* Save changes button*/}
            <button className="btn btn-primary" type="button"  
            onClick={()=>handelupdate()}>
              Save changes
            </button>
          </form>
          </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>


  )
}

export default Profile
