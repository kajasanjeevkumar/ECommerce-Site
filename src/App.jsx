import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

//Lazy Loading
const ProductDetail = React.lazy(() => import('./components/ProductDetail'));

function App() {
  return (
    <>
     <Header/>
     <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/product/:id" element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
     </Suspense>
    </>
  )
}

export default App
