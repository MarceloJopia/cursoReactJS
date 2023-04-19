import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nabvar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Nabvar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={'Te invitamos a revisar nuestra lista de productos'}/>} />
            <Route path="/categoria/:nombreCategoria" element={<ItemListContainer/>} />
            <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        </CartProvider>  
      </BrowserRouter>
    </div>
  );
}

export default App;
