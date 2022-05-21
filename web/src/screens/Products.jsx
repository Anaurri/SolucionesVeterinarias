import { Fragment, useContext } from "react";
import Carrusel from '../components/products/Carrusel';
import AboutUs from '../components/footer/AboutUs';
import PoliticaDatos from '../components/footer/PoliticaDatos';

import Desacargable1 from '../components/products/Desacargable1';


import ProductsList from '../components/products/ProductsList';

function Products() {
  return (
    <Fragment>
      <div className="pt-3" style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Carrusel />
        <div className="pt-4 pb-5" >
          {/* <div className="container pt-4 pb-5" >
            <h1 id='products'>Productos</h1>
            <h6 style={{ color: 'rgb(78, 72, 163)' }} onClick={() => window.location.replace("/#downloads")}>Ver más productos en los catálogos PDF</h6>
            <ProductsList ProfileView="false" />
          </div> */}
          <div className="container pt-4 pb-5">
            <h1 id='downloads'><i className="fa fa-download"></i>  Descarga el catálogo en PDF</h1>
            <div className="row row-cols-2"                                                                                                                                                                                                                                                                                                                                                                                                                                                           >
              <div className="col">
                <Desacargable1 />
              </div>
            </div>

          </div>

        </div>

      </div>
      <AboutUs></AboutUs>
      <PoliticaDatos></PoliticaDatos>

    </Fragment >
  );
}

export default Products;

