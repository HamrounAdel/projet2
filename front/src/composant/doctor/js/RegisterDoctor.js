import React,{useState} from 'react'
 import '../css/registerdoct.css'
 import { Link ,useNavigate} from 'react-router-dom'
 import { useDispatch } from 'react-redux' 
 import { registerDoctor } from '../../../api/apiDoctor'
function RegisterDoctor() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name,setName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const[address,setAddress] = useState('')
  const [specialite,setSpecialite] = useState('')
  const[numOrder,setNumOrder] = useState('')
  const [phone,setPhone] = useState('')
 const[experience,setExperience]=useState('')
 const[timings,setTimings]=useState('')

 const handelregisterDoctor = async () => {
  if (!name || !lastName || !email || !password || !confirmPassword || !address || !timings || !numOrder || !experience || !specialite || !phone) {
    alert("Veuillez remplir tous les champs.");
    return;
  }
  if (password!== confirmPassword) {
    alert("Le mot de passe ne correspondent pas.");
    return;
  }
  const value = {
    name,
    lastName,
    email,
    password,
    confirmPassword,
    address,
    timings,
    numOrder,
    experience,
    specialite,
    phone,
  };

  await registerDoctor(value);
  alert('Crée avec succés')
  navigate('/login/Doctor');
 
};

  return (
    <div className='bodyregist'>
       <header  className='headerhome'>
  <div className='menu'>
    <ul>
      <li>
      <a><span  style={{color:'aqua'}}>Rendez-vous Medical</span></a>
       </li>
    </ul>
      
     </div>
    <div className="menu">
     
      <ul>
      <li>
         <Link to='/'><a >Acceuil</a></Link> 
        </li>
        <li>
         <Link to='/login/Doctor'><a >Sign In</a></Link> 
        </li>
      
      </ul>
     
    </div>
  </header>
  <hr/>
     <div id="formContainer">
  <form id="form" action="#" method="POST">
    <fieldset>
      <h1>register doctor</h1>
      
      <div className='formGR'>
        <input
          type="text"
          placeholder="First Name *"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <input
          type="text"
         
          placeholder="Last Name *"
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}
        />
      </div>
      <div id='fullName'>
      <input 
          type="email"
          placeholder="Email Address *"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        </div>
      <div className='formGR'>
        <input
          type="password"
          placeholder="Password *"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <input
          type="password"
    
          placeholder="confirm password *"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
        />
        </div>
        <div className='formGR'>
        <input
          type="tel"
          
          placeholder="Telephone Number *"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />
       <select  
       value={address}
       onChange={(e)=>setAddress(e.target.value)}  >
  <option defaultValue="">adresse *</option>
  <option value="Mednine">Mednine</option>
  <option value="Tunis">Tunis</option>
  <option value="Gabes">Gabès</option>
  <option value="Sfax">Sfax</option>
  <option value="Ben Arous">ben Arous</option>
  <option value="Nabel">Nabeul</option>
  <option value="Tatawin">Tatawin</option>
  <option value="Ariana">Ariana</option>
  <option value="Monastir">Monastir</option>
  <option value="sousse">Sousse</option>
  <option value="Kairouan">Kairouan</option>
  <option value="Le Kef">Le Kef</option>
</select> 
      </div>
      <div className='formGR'>
        <input
          type="text"
          
          placeholder="Experience *"
          value={experience}
          onChange={(e)=>setExperience(e.target.value)}
        />
      <select value={specialite} 
onChange={(e) => setSpecialite(e.target.value)}>
  <option defaultValue="">Sélectionnez une spécialité</option>
  <option value="Géneraliste">Géneraliste</option>
  <option value="Pédiatre">Pédiatre</option>
  <option value="Dentiste">Dentiste</option>
  <option value="Ophtalmologue">Ophtalmologue</option>
  <option value="Ostéopathe">Ostéopathe</option>
  <option value="Gastro-entérologue">Gastro-entérologue</option>
</select>
      </div>
      <div className='formGR'>
      <input
          type="txt"
         
          placeholder="numero d'order *"
          value={numOrder}
          onChange={(e)=>setNumOrder(e.target.value)}
        />
        
        <input
          type="txt"
         
          placeholder="timings *"
          value={timings}
          onChange={(e)=>setTimings(e.target.value)}
        />
        </div>
      <br />
      <br />
      <input type="button" name="submit" id='submit'
      onClick={()=>handelregisterDoctor({name,lastName,email,experience,
      specialite,timings,numOrder,password,confirmPassword,address,phone})} />
    </fieldset>
  </form>
</div>


    </div>
  )
}

export default RegisterDoctor
