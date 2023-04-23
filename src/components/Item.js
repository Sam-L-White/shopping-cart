import React, {useState, useEffect} from "react";

const Item = (props) => {
    return(
        <div className="flex flex-col p-3 border-2 rounded-lg justify-center items-center gap-5">
            <img className="h-auto rounded-2xl" src={props.image} alt="" />
            <div className="text-2xl font-bold">{props.name}</div>
            <div>
                <div className="text-2xl">{props.price}</div>
                <input type="number" />
            </div>
            <button className="bg-cambridge text-black p-5 w-full">Add to Cart</button>
        </div>
    )
}

export {Item}