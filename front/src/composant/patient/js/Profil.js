import React ,{useState,useEffect,useRef}from 'react'
import '../css/profi.css'
import {useSelector,useDispatch}from 'react-redux'
import { useNavigate , useParams} from 'react-router-dom'
import Navigation from '../../navbar/Navigation'
import {putUser} from '../../../api/apiUser'
const Profil = () => {
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
      setAdress(auth.address);
      setPhone(auth.phone);
      setBirthday(auth.birthday);
      setPassword(auth.password);
      setNewPassword('');
      setConfirmPassword('')
    }, [auth]);
  
    const logout = () => {
      localStorage.removeItem('token');
      navigate('/login/User');
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
    const fileInputRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(auth.imageSrc || "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          // Vous pouvez ici télécharger le fichier vers le serveur
          // et mettre à jour l'URL de l'image dans l'état local ou l'envoyer au backend.
    
          // Exemple pour la mise à jour locale de l'image
          const reader = new FileReader();
          reader.onloadend = () => {
            setImageSrc(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
  return (
    <div>
         <Navigation  auth={auth} logout={logout}/>
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"/>
    {/* <div className="container rounded bg-white mt-5 mb-5"> */}
  <div className="row">
    <div className="col-md-3 border-right">
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
      <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
          ref={fileInputRef}
        />
        <img
          className="rounded-circle mt-5"
          width="150px"
          src={imageSrc}
          alt="User Profile"
          onClick={() => fileInputRef.current.click()}
          style={{ cursor: 'pointer' }}
        />
        <span className="font-weight-bold">{`${auth.name} ${auth.lastName}`}</span>
        {/* <span className="text-black-50">edogaru@mail.com.my</span> */}
        <span> </span>
      </div>
    </div>
    <div className="col-md-5 border-right">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-right">Profile Settings</h4>
        </div>
        <div className="col-md-12">
            <label className="labels"> UserName</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              defaultValue={`${auth.name} ${auth.lastName}`}
              onChange={`${(e)=>setName(e.target.value)} ${(e)=>setLastName(e.target.value)}`}
            />
          </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <label className="labels">FirstName</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              defaultValue={auth.name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="labels">  LastName</label>
            <input
              type="text"
              className="form-control"
              placeholder="surname"
              defaultValue={auth.lastName}
              onChange={(e)=>setLastName(e.target.value)}
             
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <label className="labels">Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              defaultValue={auth.address}
              onChange={(e)=>setAdress(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="labels"> Date de naissance</label>
            <input
              type="text"
              className="form-control"
              defaultValue={auth.birthday}
              onChange={(e)=>setBirthday(e.target.value)}
              placeholder="surname"
            />
          </div>
        </div>
       
        <div className="row mt-2">
          <div className="col-md-6">
            <label className="labels">Email address</label>
            <input
              type="text"
              className="form-control"
              defaultValue={auth.email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="surname"
            />
          </div>
          <div className="col-md-6">
            <label className="labels"> Phone number</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              defaultValue={auth.phone}
              onChange={(e)=>setPhone(e.target.value)}
            />
          </div>
        </div>
        {/* <div className="row mt-2">
          <div className="col-md-6"> */}
            <label className="labels"  onClick={handelShow}>Changement de password >> </label>
            {show && <div>
                <div className="col-md-12">
            <label className="labels"> Ancien mot de passe</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your name"
              defaultValue={auth.password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="row mt-2">
          <div className="col-md-6">
            <label className="labels">Nouveau mot de passe</label>
            <input
              
              className="form-control"
              type="password"
                  name="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e)=>setNewPassword(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="labels">  Comfirmer mot de passe</label>
            <input
             
              className="form-control"
              type="password"
                  name="password"
                  placeholder="Enter new password"
                  value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
                </div>}
          {/* </div>
    
        </div> */}
       
       
        <div className="mt-5 text-center">
          <button className="btn btn-primary profile-button" type="button" onClick={()=>handelupdate()}>
            Save Profile
          </button>
        </div>
      </div>
    </div>

  {/* </div> */}
</div>
</div>
  )
}

export default Profil
