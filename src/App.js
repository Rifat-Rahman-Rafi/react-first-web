import logo from './logo.svg';

import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import Show_Product from './components/Show_Product/Show_Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  


  return (
    <div className="App">
     
      <Header></Header>
      
      <Show_Product></Show_Product>
      <ToastContainer></ToastContainer>
    
   
     
      

     
    </div>
  )
}

export default App
