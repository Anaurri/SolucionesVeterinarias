import { useContext, Fragment } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import AboutUs from '../footer/AboutUs'
import logo from '../../images/caballo.png'

function Navbar() {
  return (
    <Fragment>
      <nav className="navbar lead border navAndFooter" >
        <div className="container" >
          {/* <NavLink onClick={()=> window.location.replace("/#products")} className="navbar-brand navAndFooter" to="/">Productos</NavLink> */}
          <NavLink onClick={()=> window.location.replace("/#downloads")} className="navbar-brand navAndFooter"to="/">Descargas</NavLink>
          <NavLink onClick={()=> window.location.replace("/#footer")} className="navbar-brand navAndFooter" to="/">Horario Tienda</NavLink>
          <NavLink onClick={()=> window.location.replace("/#footer")} className="navbar-brand navAndFooter" to="/">Sobre nosotros</NavLink>

        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;

