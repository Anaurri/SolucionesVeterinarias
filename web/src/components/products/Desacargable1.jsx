
import { Fragment } from 'react';
import { Link } from 'react-router-dom';


function Desacargable1() {
  return (
    <Fragment >
      <Link to="/files/soluciones_veterinarias_catalogo.pdf" target="_blank" download><img style={{height: "300px"}} alt="caratulaPDF" src="files/caratula.png" /></Link>
    </Fragment>

  )
}

export default Desacargable1;


