import { Fragment, useContext } from "react";
import Carrusel from '../components/products/Carrusel';

import ProductsList from '../components/products/ProductsList';

function Products() {
  return (
    <Fragment>
      <Carrusel />
      <div className="pt-4 pb-5 border-warning" >
        <div className="row row-cols-2">
          <div className="container pt-4 pb-5" style={{ width: "25%" }}>
            <h1>Blog</h1>
            <ProductsList ProfileView="false" />
          </div>
          <div className="container pt-4 pb-5 " style={{ width: "65%" }}>
            <h1>Catálogo de productos</h1>
            <ProductsList ProfileView="false" />
          </div>
        </div>
      </div>
    </Fragment >
  );
}

export default Products;

