import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nabvar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nabvar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Te invitamos a revisar nuestra lista de productos'}/>} />
          <Route path="/categoria/:nombreCategoria" element={<ItemListContainer/>} />
          <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
