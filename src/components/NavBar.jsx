import login from '../Images/Icons/login.png'
function NavBar()
{

  return(
  <div>
   <nav className='nav'>
   <div className="middle">
    <a href="/" className="logo">Logo</a>
    </div>
    <div className="middle">
    <input type="text" className="searchInput" placeholder="Search" />
    </div>
    <div className="middle">
    <a href="./"><img className="login" src={login} alt="" /></a>
    </div>
    
    </nav>
  </div>
  )
}





export default NavBar