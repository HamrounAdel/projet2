import React,{useState} from 'react'
import '../css/registerUser.css'
import { Link ,useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux' 
import {registerUser} from '../../../api/apiUser'
function RegisterUser() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name,setName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const[address,setAddress] = useState('')
  const [phone,setPhone] = useState('')
  const [birthday,setBirthday] = useState('')

  const handelregisterUser = async () => {

    try{
    if (!name || !lastName || !email || !password || !confirmPassword 
      || !address ||!birthday || !phone) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    if (password!== confirmPassword) {
      alert("Les nouveaux mots de passe ne correspondent pas.");
      return;
    }
   
    const value = {
      name,
      lastName,
      email,
      password,
      confirmPassword,
      address,
      birthday,
      phone,
    };
   
    await registerUser(value);
    alert('Crée avec succés')
    navigate('/login/User');
  }catch(err){
    console.log(err)
    alert('cette email exist')
  }
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
         <Link to='/login/User'><a >Sign In</a></Link> 
        </li>
      
      </ul>
     
    </div>
  </header>
     <div id="formContainer">
  <form id="form" >
    <fieldset>
      <h1>register patient</h1>
      
      <div className='formGR'>
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder="First Name *"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <input
          type="text"
          name="lName"
          id="lName"
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
          name="phone"
          id="phone"
          placeholder="Telephone Number *"
          value={phone}
               onChange={(e)=>setPhone(e.target.value)}
        />
       <select 
        value={address}
        onChange={(e)=>setAddress(e.target.value)} >
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
      <input
          type="txt"
          placeholder="jj/mm/aaaa"
          value={birthday}
          onChange={(e)=>setBirthday(e.target.value)}
        />
      <br />
      <br />
      <input type="button" name="submit" id='submit'
        onClick={()=>handelregisterUser({name,lastName,email,birthday,confirmPassword,password,address,phone})}/>
    </fieldset>
  </form>
</div>


    </div>
  )
}

export default RegisterUser
