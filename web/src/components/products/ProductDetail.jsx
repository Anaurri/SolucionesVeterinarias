
import productsService from '../../services/products-service'
import imagenPrueba from '../../images/medicamento.jpeg'
import { useParams } from 'react-router';
import { useState, useEffect, Fragment } from 'react';

function ProductDetail() {
    const params = useParams();

    const [product, setProduct] = useState({ });
    useEffect(() => {

        async function fetchProduct() {
            const { id } = params;
            console.log (id)
            console.log('Fetching product...');
            setProduct(product => ({
              ...product,
            }))
            let product = await productsService.detail(id);
            console.log(product)
            if (!isUnmounted) {
                setProduct({
                    product: product,
              })
            }
          }
          let isUnmounted = false;
          fetchProduct();
      
          return () => {
            // componentWillUnmount
            isUnmounted = true;
          }
        }, []); /*debemos poner el array de dependencias aunque vaya a vacío para que solo se cargue una vez*/
        
      
        const { picture, name, shortDescription, price } = product;
  
      
    
    return (
        <Fragment>
            <div>
                <div className="card-image px-4"  >
                    {/* <img style={{ width: '100%', height: "18rem" }} src={picture} /> */}
                    <img style={{ width: '100%', height: "18rem" }} src="https://animarket.net/wp-content/uploads/2019/12/gastropet-precio-peru-animarket.jpeg" />

                </div>
                <div class="card-body">
                    <div className="card-title">
                        {name}
                    </div>
                    <div className="card-heading">
                        {shortDescription}
                    </div>
                    <div className="card-text text-muted">
                        {price}€
                        2,3 €
                    </div>

                </div>
            </div>


            <a href="/" className="btn btn-secondary m-3 my-sm-0">Atrás</a>
        </Fragment>

    )
}
export default ProductDetail;
