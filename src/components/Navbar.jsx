import React from 'react'
//import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = ()=> {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-2" style={{paddingLeft:'10px'}}>
  <NavLink exact className="navbar-brand" to="/">Kelime Hız Test</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto" >
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/">Anasayfa </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/results">Sonuçlarım</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/challenges">Metinler</NavLink>
      </li>
      </ul>
 
  </div>
</nav>
  )
}
export default Navbar;