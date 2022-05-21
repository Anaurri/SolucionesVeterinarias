
import productsService from '../../services/products-service'
import { useParams } from 'react-router';
import { useState, useEffect, Fragment } from 'react';

function ProductDetail() {
    const params = useParams();

    const [product, setProduct] = useState({
        name: '',
        largeDescription: '',
        price: ''
    });
    useEffect(() => {

        async function fetchProduct() {
            const { id } = params;
            console.log('Fetching product...');
            const product = await productsService.detail(id);       
            if (!isUnmounted) {
                setProduct({
                    name: product.name,
                    largeDescription: product.largeDescription,
                    price: product.price
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


    const { picture, name, largeDescription, price } = product;



    return (
        <Fragment>
            <div style={{ marginLeft: "15%", marginRight: "15%" }}>
                <div style={{ width: "90%" }}  >
                    <div className="row row-cols-2">

                        <div className="card-image"  >
                            {/* <img style={{ width: '100%', height: "18rem" }} src={picture} /> */}
                            <img style={{ width: '60%', height: "auto" }} src="https://animarket.net/wp-content/uploads/2019/12/gastropet-precio-peru-animarket.jpeg" />

                        </div>
                        <div class="card-body textOfCard mt-5 ">
                            <div className="card-title mt-3" style={{fontWeight: 'bold' }}>
                                {name}
                            </div>
                            <div className="card-heading mt-4">
                                {largeDescription}
                            </div>
                            <div>{price}</div>
                            { price != null && (
                                <div className="card-text mt-5">
                                    {price}€
                                </div>
                            )} 
                            {price == null  && (
                                <div className="card-text mt-5">
                                    Precio no disponible
                                </div>
                            )}


                        </div>

                    </div>
                </div>
                <a href="/" className="btn btn-secondary m-3 my-sm-0 ">Atrás</a>

            </div>


        </Fragment>

    )
}
export default ProductDetail;
