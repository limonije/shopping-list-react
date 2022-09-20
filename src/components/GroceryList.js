import React from "react"
import List from './List'
import InputField from "./InputField"

function GroceryList({items, onItemClick, onSubmit}) {
   
    return (
        <div className="grocery-list">
            <h2 className="grocery-list-header">Shopping List</h2>
            <InputField onSubmit={onSubmit}/>
            <List items = {items} onItemClick= {onItemClick} />
        </div>    
    )
}

export default GroceryList