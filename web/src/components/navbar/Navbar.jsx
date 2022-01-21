import { useContext, Fragment } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import AboutUs from '../footer/AboutUs'
import logo from '../../images/caballo.png'

function Navbar() {

  return (
    // <nav className="navbar fixed-top bg-white border"> Al fijar la nav me sube el carrusel muy arriba
    <Fragment>
      {/* <div className="container-fluid"> */}
      <nav className="navbar lead border" >
        <div className="container">
          <NavLink className="navbar-brand" to="/products">Productos</NavLink>
          <NavLink className="navbar-brand" to="/register">Register</NavLink>
          <NavLink className="navbar-brand" to="/map"><i className="fa fa-globe" aria-hidden="true"></i></NavLink>
          <NavLink className="navbar-brand" to="/login">Login</NavLink>
          <NavLink className="navbar-brand" to="/">Sobre nosotros</NavLink>
        </div>
    </nav>
    </Fragment>
  );
}

export default Navbar;

