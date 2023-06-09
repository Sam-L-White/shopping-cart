import React, {useState, useEffect} from "react";
import {Navbar} from "../components/Navbar"

const Basket = (props) => {

    let basketArray = []
    let basketTotal = 0

    if(props.basket !== null){
        basketArray = props.basket
    }
    return(
        <div className="flex flex-col gap-10 items-center mb-48">
            <Navbar basket={props.basket}/>
            <div className="mt-48 w-2/6 flex flex-col gap-6">
                <div className="text-center text-6xl text-charcoal">Basket</div>
                {basketArray.map(item => {
                    return (
                        <div className="h-48 text-charcoal text-xl flex flex-col border-2 rounded-lg shadow-2xl p-4">
                            <div>{item.name} - Quantity: {item.amount}</div>
                            <img className="w-32 h-32" src={item.image} alt="" />
                            <div className="text-right">Total: £{item.amount * parseFloat(item.price)}</div>
                        </div>
                    )
                })}
                <div className="flex flex-row items-center">
                    {basketArray.map(item => {
                        basketTotal = basketTotal + (item.amount * parseFloat(item.price))
                    })}
                    <div className="text-3xl">Grand Total: £{basketTotal}</div>
                    <button className="border-charcoal border-solid border-8 ring-emerald p-2 rounded-2xl hover:ring-4 hover:bg-cambridge/50 text-2xl w-2/5 ml-auto"><a>Checkout</a></button>
                </div>
                
            </div>
        </div>
    )
}

export default Basket