import React, {useState, useEffect} from "react";
import {Navbar} from "../components/Navbar"

const Home = () => {
    return(
        <div>
            <Navbar />
            <div className="h-screen w-screen">
                <div className="flex flex-row">
                    <img className="w-2/5" src="/images/starfish3.jpg" alt="" />
                    <div className="bg-saffron/30 w-3/5 shadow-2xl border-l-4 border-charcoal text-charcoal text-5xl flex flex-col gap-20 items-center justify-center">
                        Some interesting starfish facts
                        <button className="border-charcoal border-solid border-8 ring-emerald p-5 rounded-2xl hover:ring-4 hover:bg-cambridge/50"><a href="/shop">SHOP NOW</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home