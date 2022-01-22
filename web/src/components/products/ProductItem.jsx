
import productsService from '../../services/products-service'
import { Fragment } from 'react';

function ProductItem({ product }) {
    return (
        <Fragment>
            <div class="card" style={{ height: "100%" }} >
                <div className="card-image"  >
                    <img style={{ width: '100%', height: "18rem" }} src={product.picture} />
                </div>
                <div class="card-body">
                    <h6 className="card-title">
                        {product.name}
                    </h6>
                    <div className="card-heading">
                        {product.shortDescription}
                    </div>
                    <div className="card-text">
                        {product.price}€
                    </div>

                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-outline-dark btn-sm">Ver detalles</a>
                </div>

            </div>


            {/* <div class="card" style={{ width: "10rem" }}>
                <img className="card-img-top" src={product.picture} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">  {product.name}</h5>
                    <p className="card-text">{product.shortDescription}</p>
                    <a href="#" className="btn btn-link">>Ver detalles</a>
                </div>
            </div> */}


        </Fragment>

    )
}
export default ProductItem;

