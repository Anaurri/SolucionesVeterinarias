import { useContext, Fragment } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import logo from '../../images/caballo.png'

function Navbar() {

  return (
    <nav className="navbar fixed-top bg-dark">
      <div className="container-fluid">
        <div class="navbar-header">
          <Link className="navbar-brand" to="/products">
            <img src={logo} alt="Logo" width="48" height="40" style={{ paddingRight: '10px' }} />
          </Link>
          <NavLink className="navbar-brand" activeClassName="active" to="/products">Productos</NavLink>
          <NavLink className="navbar-brand" activeClassName="active" to="/register">Register</NavLink>
          <NavLink className="navbar-brand" to="/map"><i className="fa fa-globe" aria-hidden="true"></i></NavLink>
          <NavLink className="navbar-brand" activeClassName="active" to="/login">Login</NavLink>
          <NavLink className="navbar-brand" activeClassName="active" to="/profile">anaurrig@gmail.com</NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

