
import productsService from '../../services/products-service'
import imagenPrueba from '../../images/medicamento.jpeg'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';


function ProductItem({ product }) {
    return (
        <Fragment>
                <div className="card-image"  >
                    {/* <img style={{ width: '100%', height: "18rem" }} src={product.picture} /> */}
                    <img style={{  width: '80%', height: "auto"}} src="https://animarket.net/wp-content/uploads/2019/12/gastropet-precio-peru-animarket.jpeg" />
                </div>
                <div class="card-body textOfCard">
                    <div className="card-title">
                        {product.name}
                    </div>
                </div>     
                <Link className="stretched-link link-unstyled" to={`/products/${product._id}`}></Link>
    </Fragment>

    )
}
export default ProductItem;

