import logo from './logo.svg';
import './App.css';
import Index from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/cart';
import React, { useState } from 'react';
import DeliveryForm from './components/shipping';

export const Fc = React.createContext();

function App() {

  const [dishes,setdishes] = useState([]);
  const [cart,setcart] = useState();

  return (
  <Fc.Provider value={{cart,setcart,dishes,setdishes}}>
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shipping' element={<DeliveryForm />} />
      </Routes>
    </Router>
  </Fc.Provider>
  );
}

export default App;
