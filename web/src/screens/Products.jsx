import { Fragment, useContext } from "react";
import Carrusel from '../components/products/Carrusel';
import AboutUs from '../components/footer/AboutUs';
import Catalogo from '../components/products/Catalogo';


import ProductsList from '../components/products/ProductsList';

function Products() {
  return (
    <Fragment>
      <div className="container pt-3">

        <Carrusel />
        <div className="pt-4 pb-5" >

          <div className="row row-cols-2">
            <div className="container pt-4 pb-5" style={{ width: "25%" }}>
              <h1>Descarga el catálogo en PDF</h1>
              <Catalogo />
            </div>
            <div className="container pt-4 pb-5 " style={{ width: "75%" }}>
              <h1>Productos</h1>
              <h5>( link al catálogo - más productos en los catálogos)</h5>
              <ProductsList ProfileView="false" />
              {/* </div> */}

            </div>
          </div>

        </div>
      </div>
      <AboutUs></AboutUs>

    </Fragment >
  );
}

export default Products;

