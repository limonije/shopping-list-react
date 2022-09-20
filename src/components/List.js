import React from "react"
import ListItem from "./ListItem"

class List extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {groceryItems: [
    //         {id: 1, title: "Milk"},
    //         {id: 2, title: "Bread"},
    //         {id: 3, title: "Eggs"},
    //         {id: 4, title: "Apples"},
    //     ]}
    //     //this.onItemClick = this.onItemClick.bind(this)
    // }

    // onItemClick(item) {
    //     console.log(`Clicked ${item.id}: ${item.title}`)
    // }

    render() {
        const listItems = this.props.items.map((item) => 
            <ListItem key={item.id} 
            item={item} 
            clickItem={() => this.props.onItemClick(item)}
            showQuantities={this.props.showQuantities}
            />
        )

        return (
            <div>
                <ul className="app-list">
                {listItems}
                </ul>
            </div>
        )
    }

}

export default List