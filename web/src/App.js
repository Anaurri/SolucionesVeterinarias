import { Route, BrowserRouter as Router, Routes, Redirect } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Products from './screens/Products';
import Error from './screens/Error';
import './App.css';
import logo from './images/caballo.png'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <h1 id='sol' className='pt-5 d-flex justify-content-center'><img className="mx-3" src={logo} width="50" alt="Logo" />
        Soluciones Veterinarias</h1>
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/404" element={() => <Error code={404} />} />
        <Route exact path="/403" element={() => <Error code={403} />} />
      </Routes>
    </Router>
  );
}

export default App;
