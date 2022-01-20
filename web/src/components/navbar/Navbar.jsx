import { useContext, Fragment } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import AboutUs from '../footer/AboutUs'
import logo from '../../images/caballo.png'

function Navbar() {

  return (
    <nav className="navbar fixed-top bg-white border">
      {/* <div className="container-fluid"> */}
      <div className="container">
        <div class="navbar-header">
          <Link className="navbar-brand" to="/products">
            <img src={logo} width="240"  alt="Logo"/>
          </Link>
          {/* <NavLink className="navbar-brand" activeClassName="active" to="/products">Productos</NavLink>
          <NavLink className="navbar-brand" activeClassName="active" to="/register">Register</NavLink>
          <NavLink className="navbar-brand" to="/map"><i className="fa fa-globe" aria-hidden="true"></i></NavLink>
          <NavLink className="navbar-brand" activeClassName="active" to="/login">Login</NavLink> */}
          <NavLink className="navbar-brand" activeClassName="active" to="/">Sobre nosotros</NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

