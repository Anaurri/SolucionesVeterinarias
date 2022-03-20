import { Route, BrowserRouter as Router, Routes, Redirect } from 'react-router-dom';
import Solvet from './components/navbar/Solvet';
import Navbar from './components/navbar/Navbar';

import Products from './screens/Products';
import ProductDetail from './components/products/ProductDetail';

import Carrusel from './components/products/Carrusel';

import Error from './screens/Error';

import './App.css';

function App() {
  return (
    <Router>
        <Navbar></Navbar>
        <Solvet></Solvet>
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/products/:id" element={<ProductDetail/>} />
          <Route exact path="/404" element={() => <Error code={404} />} />
          <Route exact path="/403" element={() => <Error code={403} />} />
        </Routes>
    </Router>
  );
}

export default App;
