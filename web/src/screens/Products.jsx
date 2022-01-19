import { Fragment, useContext } from "react";
import ProductsList from '../components/products/ProductsList';

function Products() {
  return (
    <Fragment>
      <div className="pt-4 pb-5 border-warning" >
        <div className="row row-cols-2">
          <div className="container pt-4 pb-5" style={{ width: "30%" }}>
            <ProductsList ProfileView="false" />
          </div>
          <div className="container pt-4 pb-5 " style={{ width: "70%" }}>
            <ProductsList ProfileView="false" />
          </div>
        </div>
      </div>
    </Fragment >
  );
}

export default Products;

