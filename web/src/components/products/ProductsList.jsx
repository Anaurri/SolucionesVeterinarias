import { useState, useEffect } from 'react';
import productsService from '../../services/products-service';
import { Fragment } from 'react';
import ProductItem from '../products/ProductItem';
import ReactPaginate from 'react-paginate';


function ProductsList() {

  const productPerPage = 6;

  const [state, setState] = useState({
    products: [],
    currentProducts: [], /*Los productos por página*/
    currentPage: 0,
    itemOffset: 0,
    totalPages: 0
  });
  useEffect(() => {
    // componentDidMount

    async function fetchProducts() {
      console.log('Fetching products...');
      let allProducts = await productsService.list();
      if (!isUnmounted) {
        setState({
          ...state,
          allProducts: allProducts,
          products: allProducts,
          currentProducts: allProducts.slice(0, productPerPage),
          totalPages: Math.ceil(allProducts.length / productPerPage)
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
    const newOffset = ((event.selected) * productPerPage) % products.length;
    let endOffset = 0;
    if (newOffset + productPerPage >= products.length) endOffset = products.length;
    else endOffset = newOffset + productPerPage;


    setState({
      ...state,
      itemOffset: newOffset,
      currentPage: event.selected,
      currentProducts: products.slice(newOffset, endOffset)
    });
    console.log(currentProducts)

  };
  const handleFilterChange = (letters) => {
    const keyword = letters.target.value;
    // const products = state.allProducts.filter((product) => product.name.toLowerCase().startsWith(keyword.toLowerCase()));
    const products = state.allProducts.filter((product) => product.name.toLowerCase().includes(keyword.toLowerCase()));

    setState({
      ...state,
      products: products,
      currentProducts: products.slice(0, productPerPage),
      currentPage: 0,
      itemOffset: 0,
      totalPages: Math.ceil(products.length / productPerPage)
    });
  };



  const { products, currentProducts, currentPage, itemOffset, totalPages } = state;



  return (
    <Fragment >
      <div className="container"  >

        <form class="d-flex px-3 mb-3">
          <input
            type="search"
            onChange={handleFilterChange}
            placeholder="Buscar producto..." />
        </form>
        <div className="container"  >
          <div className="row row-cols-3" style={{ height: "1000px", overflowY: "auto" }}>
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



