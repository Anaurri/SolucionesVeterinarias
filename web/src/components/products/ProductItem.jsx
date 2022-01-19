
import productsService from '../../services/products-service'
import { Fragment } from 'react';

function ProductItem({ product }) {
    return (
        <Fragment>

            <div className="card-image" >
                <img style={{ width: '100%' }} src={product.picture} />
            </div>
            <a className="card-action" href="#"><i className="fa fa-heart"></i></a>

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
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </Fragment>

    )

}
export default ProductItem;

