
import productsService from '../../services/products-service'
import {Fragment} from 'react';

function ProductItem ({product}){
    return(
        <Fragment >
            
        <div className="container" style={{ marginTop:"50px"}}>
        <div className="row">
            <div className="col-md-3">
                <div className="card-sl">
                    <div className="card-image">
                        <img
                            src={product.picture} />
                    </div>
                    <a className="card-action" href="#"><i className="fa fa-heart"></i></a>
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
                    <a href="#" className="card-button"> Purchase</a>
                </div>
            </div>
        </div>  
        </div>  

        </Fragment>
    )

}
export default ProductItem;

