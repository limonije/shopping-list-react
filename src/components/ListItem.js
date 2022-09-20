import React from "react"

function ListItem({item, clickItem, showQuantities}) {
    return (
        <div>
            <li
            key={item.id}
            className="list-item"
            onClick={clickItem}
            value={item.title}
            >
            <span>{item.title}</span>
            {showQuantities && (
            <span className="item-amount">Amount: {item.amount}</span>
            )}
            </li>
        </div>    
    )
}

export default ListItem