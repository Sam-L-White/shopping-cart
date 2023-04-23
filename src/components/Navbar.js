import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return(
        <div className="bg-charcoal text-saffron flex flex-row items-center gap-20 h-24 w-screen shadow-lg shadow-charcoal/75 fixed">
            <h1 className="font-bold text-6xl ml-64">The Starfish Shop</h1>
            <div className="ml-auto text-2xl cursor-pointer" role="button"><a href="/">Home</a></div>
            <div className="text-2xl cursor-pointer" role="button"><a href="/Shop">Shop</a></div>
            <FontAwesomeIcon className="mr-64 text-2xl cursor-pointer" role="button" icon={faCartShopping} />
        </div>
    )
}

export {Navbar}