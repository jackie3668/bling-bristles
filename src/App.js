import './App.css';
import Navbar from './component/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './page/Shop';
import ShopCategory from './page/ShopCategory';
import Product from './page/Product';
import Cart from './page/Cart';
import LoginSignup from './page/LoginSignup';
import men_banner from './component/assets/banner_mens.png'
import women_banner from './component/assets/banner_women.png'
import kids_banner from './component/assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>}></Route>
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
