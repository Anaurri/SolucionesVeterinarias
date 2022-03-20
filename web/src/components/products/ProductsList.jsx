import { useState, useEffect } from 'react';
import productsService from '../../services/products-service';
import { Fragment } from 'react';
import ProductItem from '../products/ProductItem';
import ReactPaginate from 'react-paginate';


function ProductsList() {

  const [state, setState] = useState({
    products: [],
    currentProducts: [], /*Los productos por página*/
    currentPage: 1,
    itemOffset: 0,
    totalPages: 0
  });
  useEffect(() => {
    // componentDidMount

    async function fetchProducts() {
      console.log('Fetching products...');
      let products = await productsService.list();
      if (!isUnmounted) {
        setState({
          ...state,
          products: products,
          currentProducts: products.slice(0, 6),
          totalPages: Math.ceil(products.length / 6)
        })
      }
    }
    let isUnmounted = false;
    fetchProducts();

    return () => {
      // componentWillUnmount
      isUnmounted = true;
    }
  }, []); /*debemos poner el array de dependencias aunque vaya a vacío para que solo se cargue una vez*/

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 6) % products.length;
    setState({
      ...state,
      itemOffset: newOffset,
      currentPage: currentPage + 1,
      currentProducts: products.slice(newOffset, newOffset + 6)
    });
  };


  const { products, currentProducts, currentPage, itemOffset, totalPages } = state;



  return (
    <Fragment >
      <div className="container"  >

        <form class="d-flex px-3 mb-3">
          <input class="form-control me-sm-2" type="text" placeholder="Buscar producto..." />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
        </form>
        <div className="container"  >
          <div className="row row-cols-3" style={{ height: "1000px", overflowY: "auto" }}>
            {/* paginación */}
            {currentProducts.map(product => (
              <div className="card col pb-2" key={product.id}>
                <ProductItem product={product}></ProductItem></div>
            ))}
          </div>
          <div className="container">

            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={totalPages}
              previousLabel="<"
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}

            />
          </div>
        </div>

      </div>


    </Fragment>

  )
}

export default ProductsList;



