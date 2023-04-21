import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return(
        <div className="bg-charcoal text-saffron flex flex-row items-center gap-20 h-24">
            <h1 className="font-bold text-6xl ml-40">The Shop</h1>
            <div className="ml-auto text-2xl">Home</div>
            <div className="text-2xl">Products</div>
            <FontAwesomeIcon className="mr-80 text-2xl" icon={faCartShopping} />
        </div>
    )
}

export {Navbar}