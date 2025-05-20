import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Navbar({logindata,setLoginData}) {

let navigate={useNavigate}
function logout(){
  localStorage.removeItem('token');
  setLoginData(null)
  navigate('/login')

}






  //return <>
  //<nav className="navbar navbar-expand-lg navbar-light bg-black ">
  //<Link className="navbar-brand text-white" to="">MOVIES</Link>
  //<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //  <span className="navbar-toggler-icon" />
   // </button>
  //<div className="collapse navbar-collapse" id="navbarSupportedContent">
    //<ul className="navbar-nav mr-auto">
      //<li className="nav-item active">
        //<Link className="nav-link text-white"to="/parent">trending </Link>
      //</li>
      //<li className="nav-item">
        //<Link className="nav-link text-white"to="/home">watch now</Link>
      //</li>

      //</ul>
      //<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       //{logindata?  <li className="nav-item">
         // <Link  className="nav-link text-white" onClick={logout} to="">Logout</Link>
       // </li>:<>
        //<li className="nav-item">
          //<Link className="nav-link text-white" to="/login">Login</Link>
        //</li>
        //<li className="nav-item">
          //<Link className="nav-link text-white" to="/register">Register</Link>
        //</li>
        //</>}
        //</ul>


      
  //</div>
//</nav> 
  //</>
//}





 return <>
<nav className="navbar navbar-expand-lg pinktitle">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="">MOVIERUSH</Link>
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/home">Trending</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/parent"> Our Content</Link>
        </li>
        
        
      </ul>
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       {logindata?  <li className="nav-item">
          <Link onClick={logout} className="nav-link text-white" to="">Logout</Link>
        </li>:<>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="register">Register</Link>
        </li>
        </>}
        
      
      </ul>
    </div>
  </div>
</nav>

  
  </>
}
























