import { Fragment, useContext } from "react";
import { useTranslation } from 'react-i18next';
import ProductsList from '../components/products/ProductsList';  
import AuthContext from '../contexts/AuthStore';  

function Products() {
  const { t } = useTranslation()

  return (
    <Fragment>


         <ProductsList ProfileView="false" />

    </Fragment>
  );
}

export default Products;

