import React from "react"
import List from './List'

function ShoppingCart({items, clickItem}) {
    return (
        <div className="cart-list">
            <h2 className="cart-list-header">Shopping Cart</h2>
            <div className="empty-button">
                <button onClick={clickItem}>Empty the shopping cart</button>
            </div>    
            <List items = {items} showQuantities={true} />
        </div>    
    )
}

export default ShoppingCart