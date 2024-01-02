import React,{useState} from 'react'
import '../css/login11.css'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
function LoginDoctor() {
  const navigate =useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
    
   const handelLogin=async(values)=>{
      const res = await axios.post('http://localhost:5003/doctor/login',values)
      await console.log('reponse login', res.data.token)
      await localStorage.setItem('token',res.data.token)
      navigate('/doct')
    }
  
  return (
    <div>
    
    {/* <section className="login"> */}
    <header  className='headerhome'>
  <div className='menu'>
    <ul>
      <li>
      <a><span  style={{color:'white'}}>MedAppoint.</span></a>
       </li>
    </ul>
      
     </div>
    <div className="menu">
     
      <ul>
      <li>
         <Link to='/'><a >Acceuil</a></Link> 
        </li>
        <li>
         <Link to='/register/Doctor'><a >Sign Up</a></Link> 
        </li>
      
      </ul>
     
    </div>
  </header>
  <div className='bodylog'>
  <div className="login_box">
    <div className="left">
      <div className="top_link">
        <a href="#">
          Espace Doctor
        </a>
      </div>
      <div className="contact">
        <form action="">
          <h3>SIGN IN</h3>
          <input type="text"
           placeholder="USERNAME" 
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
          />
          <input type="password" 
          placeholder="PASSWORD"
          value={password}
           onChange={(e)=>setPassword(e.target.value)}
          />
          <button className="submit"type='button' onClick={()=>handelLogin({email,password})}>LET'S GO</button>
        </form>
      </div>
    </div>
    <div className="right">
      <div className="right-text">
        <h2>Rendez-Vous</h2>
        <br/><br/>
        <h5><a style={{color:'blue'}}><Link to='/register/Doctor'>Create new account</Link></a></h5>
      </div>
      <div className="right-inductor">
        <img
          src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft"
          alt=""
        />
      </div>
    </div>
  </div>
{/* </section> */}


</div> 
</div>
   
  )
}

export default LoginDoctor
