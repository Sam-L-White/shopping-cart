import React, {useState, useEffect} from "react";

const Item = (props) => {
    return(
        <div className="flex flex-col p-3 border-2 border-charcoal/10 rounded-3xl justify-center items-center gap-5 shadow-xl shadow-charcoal/40">
            <img className="h-auto rounded-2xl drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)]" src={props.image} alt="" />
            <div className="text-2xl font-bold drop-shadow-none">{props.name}</div>
            <div className="text-2xl drop-shadow-none">£{props.price}</div>
            <button className="bg-cambridge text-black p-5 w-full rounded-lg hover:bg-cambridge/75" onClick={() => props.addToBasket(props)}>Add to Cart</button>
        </div>
    )
}

export {Item}