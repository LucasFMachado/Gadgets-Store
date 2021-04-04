import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './pages/Products'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
