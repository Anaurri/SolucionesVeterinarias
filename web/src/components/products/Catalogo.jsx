import { useState, useEffect } from 'react';
import productsService from '../../services/products-service';
import { Fragment } from 'react';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';


function Catalogo() {




  return (
    <Fragment >
      <Link to="/files/prueba.pdf" target="_blank" download>Download</Link>
    </Fragment>

  )
}

export default Catalogo;



