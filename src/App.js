import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        </header>
      
      <main>
        <ItemListContainer greeting="Bienvenidos a BurgerHouse"/>
        
      </main>
    </div>
  );
}

export default App;
