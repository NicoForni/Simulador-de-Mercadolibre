import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Search from './Components/Search/Search';
import ItemSearch from './Components/ItemSearch/ItemSearch';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import Home from './Components/Home/Home';
import './App.css';

function App() {
  return (   
    <>
    <BrowserRouter>
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