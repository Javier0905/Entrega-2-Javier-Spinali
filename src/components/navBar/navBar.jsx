import React from 'react';
import CartWidget from '../CartWidget/CartWidget'; 

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <div>
                <CartWidget /> 
            </div>
        </nav>
    );
}

export default NavBar;
