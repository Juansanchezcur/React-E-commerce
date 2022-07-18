import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
       <ItemListContainer greeting="Bienvenidos a BurgerHouse"/>
      </header>
    </div>
  );
}

export default App;
