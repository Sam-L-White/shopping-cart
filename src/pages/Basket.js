import React, {useState, useEffect} from "react";
import {Navbar} from "../components/Navbar"

const Basket = (props) => {
    return(
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center">
                {console.log(props.basket)}
                {props.basket.map(item => {
                    return <div>{item.name}</div>
                })}
            </div>
        </div>
    )
}

export default Basket