import { useState, useEffect } from 'react';
import productsService from '../../services/products-service';
import { Fragment } from 'react';
import ProductItem from '../products/ProductItem';

function ProductsList(){

    const [state, setState] = useState({
        products: []
      });
      useEffect(() => {
        // componentDidMount
    
        async function fetchProducts() {
          console.log('Fetching products...');
          setState(state => ({
            ...state,
          }))
          let products = await productsService.list();
          console.log (products)
          if (!isUnmounted) {
            setState({
              products: products,
            })
          }
        }
        let isUnmounted = false;
        fetchProducts();    

        return () => {
          // componentWillUnmount
          isUnmounted = true;
        }
      },[]); /*debemos poner el array de dependencias aunque vaya a vacío para que solo se cargue una vez*/
      const { products } = state;



    return (
    <Fragment >
    <div className=" container "  >
    <div className="row row-cols-3 border " style={{  height: "700px" ,overflowY: "scroll"}}>
              {products.map(product => (
                   <div  className="card col" key={product.id}>
                  <ProductItem product={product}></ProductItem></div>
              ))}
               </div>
               </div>

    </Fragment>

  )
}

export default ProductsList;



