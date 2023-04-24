import React, {useState, useEffect} from "react";
import {Navbar} from "../components/Navbar"

const Basket = (props) => {
    return(
        <div className="flex flex-col gap-10">
            <Navbar basket={props.basket}/>
            <div className="mt-48">
                {props.basket.map(item => {
                    return (<div className=" bg-saffron h-64 text-charcoal w-64 text-xl text-end">{item.name}</div>)
                })}
            </div>
        </div>
    )
}

export default Basket