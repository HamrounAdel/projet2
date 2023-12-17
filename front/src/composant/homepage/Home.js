
import './home.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Footer from './footer/Footer';
import ListSpecialite from './specialite/ListSpecialite'

function Home() {
  const navigate = useNavigate()
  const auth = useSelector(state => state.User)

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/patient')
  }
  return (
    <div>
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
         <Link to=''><a >Contact</a></Link> 
        </li>
        <li>
         <Link to=''><a >A propos</a></Link> 
        </li>
        <li className='dropdown'>
         <a >se connecter</a>
         <div className='dropdown-content'>
         <ul>
           <li><Link to='/login/User'> Patient</Link></li>
           <li><Link to='/login/Doctor'> Doctor</Link></li>
         </ul>
         </div>
        </li>
        
      
      </ul>
     
    </div>
  </header>
  <div className='log'>
        
        <h1 > Bienvenue à systéme de rendez-vous medical</h1>
        
         
       </div> 
    <div className='pos'>
      <h1 >Listes de specialites </h1>
  
    <ListSpecialite/>
    </div>
    <div>
  
    </div>
<footer className=''>
  <Footer/>
</footer>

    </div>
  )
}

export default Home
