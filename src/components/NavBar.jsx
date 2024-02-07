import { useState } from 'react'
import PropTypes from 'prop-types';
import login from '../Images/Icons/login-person.png'
import '../styles/NavBar.css'; 

function NavBar({ setCity, onUserMenu }) {

  const [city, setCityLocal] = useState(null)
  //pressing enter also 
  const handleEnterKey = (event) =>{
    if(event.key === "Enter"){
      search();  
    }
  }

  const handleUserMenu = () => onUserMenu();

  const search = () => {
      // const addressElement = document.getElementsByClassName("address")
      if(city === ""){
        console.log("nothing entered");
       return 0;       
      }
      else{
        console.log('city name is ', city);
        setCity(city);
      }
  }
  return(
  <div>
   <nav className='nav'>
   {/* <div className="left">
    <a href="/" className="logo">Logo</a>
    </div> */}
    <div className="middle">
    <input type="text"
    className="searchInput" 
    placeholder="Search" 
    value={city}
    onKeyDown={handleEnterKey}
    onChange={(element) => {
      setCityLocal(element.target.value);
      
      }
    }
    />
    </div> 
    <img role='button' onClick={handleUserMenu} className="login" src={login} alt="" />
    </nav>
  </div>
  )
}

NavBar.propTypes = {
  setCity: PropTypes.func.isRequired,
};

export default NavBar