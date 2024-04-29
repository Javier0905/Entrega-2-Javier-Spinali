import React from 'react';
import NavBar from './components/navBar/navBar'; 
import ItemListContainer from './components/ItemListConstainer/ItemListContainer'; 
import CardItem from './components/components items/CardItem';
import "./Styles/cardItem.css"
import ContainerCardItem from './components/components items/ContainerCardItems';
import './App.css'; 
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <NavBar />
      <Routes>
      <ItemListContainer message="¡Bienvenido a nuestra tienda de Electrónica en línea!" />
      <Route path='/' element= {<ContainerCardItem/>}/>
      <Route path='/item/:id' element= {<ContainerCardItem/>}/>
      <Route path='/category/:idCategory' element= {<ContainerCardItem/>}/>
      </Routes>
      <CardItem />
      </BrowserRouter>
    </div>
  );
}

export default App;
