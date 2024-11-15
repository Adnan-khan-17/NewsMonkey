import React  from 'react'
import { Outlet, Link } from "react-router-dom";



const Navbar = (props)=> {

    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-color fixed-top" style={{backgroundColor:"black", color: "smokewhite"}}>
          <div className="container-fluid">
            <h3 className="display-6" style={{fontSize:"2rem" , color: "white"}}>NewsMonkey</h3>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link active" style={{color:"white"}} aria-current="page" to="/general">General</Link>
          </li>
        
          <li className='nav-item'>
            <Link className="nav-link active" style={{color:"white"}} aria-current="page" to="/business">Business</Link>
          </li> 
          <li className='nav-item'>
            <Link className="nav-link active" style={{color:"white"}} aria-current="page" to="/entertainment">Entertainment</Link>
          </li>
          <li className='nav-item'>
            <Link className="nav-link active" style={{color:"white"}} aria-current="page" to="/health">Health</Link>
          </li>
          <li className='nav-item'>
          <Link className="nav-link active" style={{color:"white"}} aria-current="page" to="/science">Science</Link>
          </li>
          <li className='nav-item'>
            <Link className="nav-link active" style={{color:"white"}} aria-current="page" to="/sports">Sports</Link>
          </li>
          <li className='nav-item'>
            <Link className="nav-link active" style={{color:"white"}} aria-current="page" to="/technology">Technology</Link>
          </li>
      </ul>
      <div className="form-check form-switch form-check-reverse text-dark mx-2">
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckReverse"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckReverse" style={{color: "grey"}}>Enable DarkMode</label>
      </div>

    </div>
  </div>
</nav>
  <Outlet/>
      </div>
    )
}


export default Navbar