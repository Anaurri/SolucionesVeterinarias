import { Fragment, useContext } from "react";
import Carrusel from '../components/products/Carrusel';
import AboutUs from '../components/footer/AboutUs';
import Blog from '../components/products/Blog';


import ProductsList from '../components/products/ProductsList';

function Products() {
  return (
    <Fragment>
      <div className="container pt-3">

        <Carrusel />
        <div className="pt-4 pb-5" >

          <div className="row row-cols-2">
            <div className="container pt-4 pb-5" style={{ width: "25%" }}>
              <h1>Blog</h1>
              <Blog />
            </div>
            <div className="container pt-4 pb-5 " style={{ width: "65%" }}>
              <h1>Catálogo de productos</h1>
              <ProductsList ProfileView="false" />
            </div>
          </div>

        </div>
        <AboutUs></AboutUs>
      </div>
    </Fragment >
  );
}

export default Products;

