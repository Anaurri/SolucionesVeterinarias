import { Route, BrowserRouter as Router, Routes, Redirect } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Products from './screens/Products';
import Error from './screens/Error';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div>
        <div className="container pt-5 pb-5">
          <Routes>
            <Route exact path="/products" element={<Products/>} />
            <Route exact path="/404" element={() => <Error code={404} />} />
            <Route exact path="/403" element={() => <Error code={403} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
