import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nabvar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Nabvar/>
      <ItemListContainer greeting={'Bienvenidos a mi Tienda de Juegos'}/>
    </div>
  );
}

export default App;
