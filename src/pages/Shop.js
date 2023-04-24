import React, {useState, useEffect} from "react";
import {Navbar} from "../components/Navbar"
import { Item } from "../components/Item";

const Shop = (props) => {

    const [items, setItems] = useState([
        {
            name: "Item 1",
            image: "/images/starfish1.jpg",
            price: "5.00",
            amount: 0
        },
        {
            name: "Item 2",
            image: "/images/starfish1.jpg",
            price: "5.00",
            amount: 0
        },
        {
            name: "Item 3",
            image: "/images/starfish1.jpg",
            price: "5.00",
            amount: 0
        },
        {
            name: "Item 4",
            image: "/images/starfish1.jpg",
            price: "5.00",
            amount: 0
        },
        {
            name: "Item 5",
            image: "/images/starfish1.jpg",
            price: "5.00",
            amount: 0
        },
        {
            name: "Item 6",
            image: "/images/starfish1.jpg",
            price: "5.00",
            amount: 0
        },
        {
            name: "Item 7",
            image: "/images/starfish1.jpg",
            price: "5.00",
            amount: 0
        },
        {
            name: "Item 8",
            image: "/images/starfish1.jpg",
            price: "5.00",
            amount: 0
        }
    ])

    return(
        <div className="flex flex-col">
            <Navbar basket={props.basket}/>
            <div className="grid grid-cols-4 gap-24 ml-64 mr-64 mt-48">
                {items.map(item => {
                    return <Item name={item.name} image={item.image} price={item.price} amount={item.amount} addToBasket={props.addToBasket}/>
                })}
            </div>
        </div>
    )
}

export default Shop