
import productsService from '../../services/products-service'
import { Fragment } from 'react';

function ProductItem({ product }) {
    return (
        <Fragment>

            <div className="card-image" >
                <img style={{ width: '100%' }} src={product.picture} />
            </div>
            <div class="card-body">
                <div className="card-heading">
                    {product.name}
                </div>
                <div className="card-heading">
                    {product.shortDescription}
                </div>
                <div className="card-text">
                    {product.largeDescription}
                </div>
                <div className="card-text">
                    {product.price}€
                </div>

            </div>

            <div className="card-footer">
                <a href="#" className="card-button">Ver detalles</a>
            </div>
        </Fragment>

    )
}
export default ProductItem;

