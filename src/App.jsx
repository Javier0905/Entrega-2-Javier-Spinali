import React from 'react';
import NavBar from './components/navBar/navBar'; 
import ItemListContainer from './components/ItemListConstainer/ItemListContainer'; 
import CardItem from './components/components items/CardItem';
import './App.css'; 

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <ItemListContainer message="¡Bienvenido a nuestra tienda en línea!" />
      <CardItem />
    </div>
  );
}

export default App;
