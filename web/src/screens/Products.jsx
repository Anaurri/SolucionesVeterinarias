import { Fragment, useContext } from "react";
import ProductsList from '../components/products/ProductsList';

function Products() {
  return (
    <Fragment>
      <div className="container pt-4 pb-5 bg-transparent border-warning  rounded" >
        <div className="row row-cols-2">
          <div className="container pt-4 pb-5 bg-transparent overflow auto" style={{ width: "20%" }}>

            <ProductsList ProfileView="false" />

          </div>
          <div className="container pt-4 pb-5 bg-transparent overflow auto" style={{ width: "70%" }}>
            <ProductsList ProfileView="false" />
          </div>

        </div>
      </div>
    </Fragment >
  );
}

export default Products;

