
import productsService from '../../services/products-service'
import {Fragment} from 'react';

function ProductItem ({product}){
    return(
        <Fragment >
            
        <div className="container bg-warning pt-2">
        <div className="row">
            <div>
                <div className="card-sl "style={{ fontSize: '12' }}>
                    <div className="card-image" style={{  alignItems: "center"}}>
                        <img style={{ width: '100%'}}
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

