import { useState } from 'react'
import PropTypes from 'prop-types';
import login from '../Images/Icons/login.png'
import SearchIcon from '../Images/Icons/search.png'


function NavBar({ setCity }) {

  const [city, setCityLocal] = useState(null)
  //pressing enter also 
  const handleEnterKey = (event) =>{
    if(event.key === "Enter"){
      search();
    }
  }

  const search = ()=>{
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
   <div className="left">
    <a href="/" className="logo">Logo</a>
    </div>
    <div className="middle">
    <input type="text"
    className="searchInput address" 
    placeholder="Search" 
    value={city}
    onKeyDown={handleEnterKey}
    onChange={(element) => {
      setCityLocal(element.target.value);
      }
    }
    />
    <img src={SearchIcon} className="searchIcon" alt="" onClick={()=>{search()}} />
    </div>
    <div className="right">
    <a href="./"><img className="login" src={login} alt="" /></a>
    </div>
    
    </nav>
  </div>
  )
}



NavBar.propTypes = {
  setCity: PropTypes.func.isRequired,
};

export default NavBar