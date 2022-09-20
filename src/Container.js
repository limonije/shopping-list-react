import React from "react"
import GroceryList from "./components/GroceryList"
import ShoppingCart from "./components/ShoppingCart"

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = 
            {groceryItems: [
                {id: 1, title: "Milk"},
                {id: 2, title: "Bread"},
                {id: 3, title: "Eggs"},
                {id: 4, title: "Apples"},
            ],
            shoppingListItems: [
                {id: 1, title: "Chocolate", amount: 2}
            ]}
            

            this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
            this.emptyCart = this.emptyCart.bind(this)
            this.addGroceryItem = this.addGroceryItem.bind(this)
    }

    handleClickGroceryItem(item) {
        console.log(`${item.title}`)
        this.setState((prevState) => {
            const newShoppingList = [...prevState.shoppingListItems]
            if (newShoppingList.map(item => item.title).includes(item.title)){
            this.addAmountToItem(item, 1)  
            console.log("This is double:", newShoppingList )
            } else
            newShoppingList.push({id: newShoppingList.length + 1, title: `${item.title}`, amount: 1})
            const newState = {...prevState , shoppingListItems: newShoppingList}
            return newState;
        })
    }


    emptyCart() {
        console.log("Het werkt!")
        this.setState({shoppingListItems: []});
    } 

    addGroceryItem(value) {
        console.log(value)
        this.setState((prevState) => {
            const newGroceryList = [...prevState.groceryItems]
            console.log("This is copie:", newGroceryList )
            newGroceryList.push({id: newGroceryList.length + 1, title: value})
            const newState = {...prevState , groceryItems: newGroceryList}
            return newState;
        
        })
    
    }

    addAmountToItem(item, amount) {
        this.setState({
            shoppingListItems: this.state.shoppingListItems.map(listItem => {
                if (listItem.title === item.title) {
                    return {
                        id: listItem.id,
                        title: listItem.title,
                        amount: listItem.amount + amount,
                    }
                }
                return listItem
            })
        })
    }

        
    

    render() {
        
        return (
        <div className="container">
            <GroceryList 
                items={this.state.groceryItems} 
                onItemClick={this.handleClickGroceryItem}
                onSubmit={this.addGroceryItem}
            />
            <ShoppingCart 
                items={this.state.shoppingListItems}
                clickItem={this.emptyCart}
            />
        </div> 
        
    )
}
}

export default Container