import './App.css';
import Navbar from './component/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './page/Shop';
import ShopCategory from './page/ShopCategory';
import Product from './page/Product';
import Cart from './page/Cart';
import LoginSignup from './page/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory category="men"/>}></Route>
        <Route path='/womens' element={<ShopCategory category="women"/>}></Route>
        <Route path='/kids' element={<ShopCategory category="kids"/>}></Route>
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
