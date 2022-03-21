import { Fragment, useContext } from "react";
import Carrusel from '../components/products/Carrusel';
import AboutUs from '../components/footer/AboutUs';
import Catalogo from '../components/products/Catalogo';


import ProductsList from '../components/products/ProductsList';

function Products() {
  return (
    <Fragment>
      <div className="pt-3" style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Carrusel />
        <div className="pt-4 pb-5" >
          <div className="container pt-4 pb-5" >
            <h1>Productos</h1>
            <h5>( link al catálogo - más productos en los catálogos)</h5>
            <ProductsList ProfileView="false" />
          </div>
          <div className="container pt-4 pb-5">
            <h1>Descarga el catálogo en PDF</h1>
            <Catalogo />
          </div>

        </div>

      </div>
      <AboutUs></AboutUs>

    </Fragment >
  );
}

export default Products;

