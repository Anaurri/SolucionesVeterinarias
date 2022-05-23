import { Fragment, useContext } from "react";
import Carrusel from '../components/products/Carrusel';
import AboutUs from '../components/footer/AboutUs';
import Desacargable1 from '../components/products/Desacargable1';


function Products() {
  return (
    <Fragment>
      <div className="pt-3" style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Carrusel />
        <div className="pt-4 pb-5" >
        <h3 id='downloads'><i className="fa fa-download"></i>  Descarga el catálogo en PDF</h3>
          <div className="container pt-4 pb-5">
            <div className="row row-cols-2">
              <div className="col">
                <Desacargable1 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutUs></AboutUs>
    </Fragment >
  );
}

export default Products;

