import { Fragment } from 'react';
import {  NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <Fragment>
      <nav className="navbar lead border navAndFooter" >
        <div className="container " >
          <NavLink onClick={()=> window.location.replace("/#downloads")} className="navbar-brand navAndFooter pt-3" to="/"><p className="h6"> Descargas</p></NavLink>
          <NavLink onClick={()=> window.location.replace("/#footer")} className="navbar-brand navAndFooter pt-3" to="/"><p className="h6"> Horario Tienda</p></NavLink>
          <NavLink onClick={()=> window.location.replace("/#footer")} className="navbar-brand navAndFooter pt-3" to="/"><p className="h6"> Sobre nosotros</p></NavLink>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;

