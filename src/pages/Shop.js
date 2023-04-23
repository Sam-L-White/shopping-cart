import React, {useState, useEffect} from "react";
import {Navbar} from "../components/Navbar"
import { Item } from "../components/Item";

const Shop = () => {

    const [items, setItems] = useState([
        {
            name: "Item 1",
            image: "/images/starfish1.jpg",
            price: "£5"
        },
        {
            name: "Item 2",
            image: "/images/starfish1.jpg",
            price: "£5"
        },
        {
            name: "Item 3",
            image: "/images/starfish1.jpg",
            price: "£5"
        },
        {
            name: "Item 4",
            image: "/images/starfish1.jpg",
            price: "£5"
        },
        {
            name: "Item 5",
            image: "/images/starfish1.jpg",
            price: "£5"
        },
        {
            name: "Item 6",
            image: "/images/starfish1.jpg",
            price: "£5"
        },
        {
            name: "Item 7",
            image: "/images/starfish1.jpg",
            price: "£5"
        },
        {
            name: "Item 8",
            image: "/images/starfish1.jpg",
            price: "£5"
        }
    ])

    return(
        <div>
            <Navbar />
            <div className="grid grid-cols-4 gap-40 ml-64 mr-64 mt-32">
                {items.map(item => {
                    return <Item name={item.name} image={item.image} price={item.price}/>
                })}
            </div>
            
        </div>
    )
}

export default Shop