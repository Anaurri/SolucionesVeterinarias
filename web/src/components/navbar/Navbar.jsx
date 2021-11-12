import { useContext, Fragment } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import logo from '../../images/caballo.png'

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#171721'}}>
      <div className="container">
        <Link className="navbar-brand" to="/products">
        <img src={logo} alt="Logo" width="48" height="40" style={{ paddingRight: '10px'}}  className="d-inline-block align-middle"/>

        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/products">Productos</NavLink></li>
          </ul>
          <ul className="navbar-nav d-flex">
          <li className="nav-item"><NavLink className="nav-link text-warning" to="/map"><i className="fa fa-globe" aria-hidden="true"></i></NavLink></li>
              <Fragment>
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink></li>
              </Fragment>
              <Fragment>
                <li className="nav-item"><Link className="nav-link text-warning" to="/notifications-list"><i className="fa fa-bell" /></Link></li>
                <li className="nav-item"><Link className="nav-link text-warning" to="/create-event"><i className="fa fa-cart" /></Link></li>
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/profile">anaurrig@gmail.com</NavLink></li>
              </Fragment>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

