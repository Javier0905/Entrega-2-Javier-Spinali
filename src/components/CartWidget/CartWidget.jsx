import React from 'react';

const CartWidget = () => {
    
    const itemCount = 5; 

    return (
        <div>
            {/* Widget del carrito de compras */}
            <p>Carrito: {itemCount} elementos</p>
        </div>
    );
}

export default CartWidget;
