import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <header className="App-header">
          <Navbar/>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenidos a BurgerHouse"/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Filtramos tus productos" />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
          </Routes>
        </main>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
