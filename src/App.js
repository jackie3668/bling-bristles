import './App.css';
import Navbar from './component/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './page/Shop';
import ShopCategory from './page/ShopCategory';
import Product from './page/Product';
import Cart from './page/Cart';
import LoginSignup from './page/LoginSignup';
import Footer from './component/footer/Footer';
import QuickCart from './page/QuickCart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/all' element={<ShopCategory category="all"/>}></Route>
        <Route path='/new' element={<ShopCategory category="new"/>}></Route>
        <Route path='/sale' element={<ShopCategory category="sale"/>}></Route>
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkoutnow' element={<QuickCart/>}></Route>
        <Route path='/login' element={<LoginSignup />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
