import React ,{useState,useEffect,useRef}from 'react'
import '../css/profi.css'
import {useSelector,useDispatch}from 'react-redux'
import { useNavigate , useParams} from 'react-router-dom'
import Navigation from '../../navbar/Navigation'
import {putDoctor} from '../../../api/apiDoctor'

const DoctProfil = () => {

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
    const [timings, setTimings] = useState('');
    const [experience, setExperience] = useState('');
    useEffect(() => {
      setName(doct.name);
      setLastName(doct.lastName);
      setEmail(doct.email);
      setAdress(doct.adress);
      setPhone(doct.phone);
      setPassword(doct.password);
      setSpecialite(doct.specialite);
      setExperience(doct.experience);
      setTimings(doct.timings)
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
        timings,
        experience,
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
  
    const fileInputRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(auth.imageSrc || "https://bootdey.com/img/Content/avatar/avatar6.png");

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
          <Navigation  auth={auth} logoutdoct={logoutdoct} doct={doct}/>
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
        <span className="font-weight-bold">{`${doct.name} ${doct.lastName}`}</span>
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
              defaultValue={`${doct.name} ${doct.lastName}`}
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
              defaultValue={doct.name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="labels">  LastName</label>
            <input
              type="text"
              className="form-control"
              placeholder="surname"
              defaultValue={doct.lastName}
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
              defaultValue={doct.address}
              onChange={(e)=>setAdress(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="labels">Specialite </label>
            <input
              type="text"
              className="form-control"
              defaultValue={doct.specialite}  
              onChange={(e)=>setSpecialite(e.target.value)}
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
              defaultValue={doct.email}
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
              defaultValue={doct.phone}
              onChange={(e)=>setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <label className="labels">timings</label>
            <input
              type="text"
              className="form-control"
              defaultValue={doct.timings}
              onChange={(e)=>setTimings(e.target.value)}
              placeholder="surname"
            />
          </div>
          <div className="col-md-6">
            <label className="labels">  experience</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              defaultValue={doct.experience}
              onChange={(e)=>setExperience(e.target.value)}
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

export default DoctProfil