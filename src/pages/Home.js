import React, {useState, useEffect} from "react";
import {Navbar} from "../components/Navbar"

const Home = () => {
    return(
        <div>
            <Navbar />
            <div className="h-screen grid items-center justify-center">
                <h1 className="text-9xl">THE SHOP</h1>
            </div>
        </div>
    )
}

export default Home