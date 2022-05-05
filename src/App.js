import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Search from './Components/Search/Search';
import ItemSearch from './Components/ItemSearch/ItemSearch';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import Home from './Components/Home/Home';
import './App.css';
import {Helmet} from 'react-helmet';

function App() {
  return (   
    <>
    <BrowserRouter>
      <Helmet>
        <title>Mercadolibre</title>
        <meta name='description' content='Buy products with Free Shipping on the day in Mercado Libre Argentina. Find thousands of brands and products at incredible prices.'/>
        <meta name='keywords' content='Products,Free Shipping, Buy, Sell, Categories'/>
      </Helmet>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:texto' element={<Search/>} />
        <Route path='/items?search=' element={<ItemSearch/>} />
        <Route path='/items/:id' element={<ItemDetail/>} />        
      </Routes> 
    </BrowserRouter> 
    </>
  );
}

export default App;