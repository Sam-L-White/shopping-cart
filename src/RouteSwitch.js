import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";

const RouteSwitch = () => {

  const [basket, setBasket] = useState([])

    const addToBasket = (item) => {
        let newArray = basket.concat(item)
        setBasket(newArray)
        window.localStorage.setItem('basket', JSON.stringify(basket))
    }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home addToBasket={addToBasket}/>}/>
        <Route path="/shop" element={<Shop addToBasket={addToBasket}/>}/>
        <Route path="/basket" element={<Basket basket={JSON.parse(window.localStorage.getItem('basket'))}/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;