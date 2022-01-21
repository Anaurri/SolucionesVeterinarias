import { useContext, Fragment } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import AboutUs from '../footer/AboutUs'
import logo from '../../images/caballo.png'

function Solvet() {

  return (
    // <nav className="navbar fixed-top bg-white border"> Al fijar la nav me sube el carrusel muy arriba
          <nav className="navbar bg-white border" >
      <div className="container d-flex justify-content-center  ">
        <div class="navbar-header">
            <img src={logo} width="200"  alt="Logo"/>
        </div>

      </div>
    </nav>
  );
}

export default Solvet;

