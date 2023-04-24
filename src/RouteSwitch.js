import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";

const RouteSwitch = () => {

  const [basket, setBasket] = useState(basketState())

  function basketState(){
    if(JSON.parse(window.localStorage.getItem('basket')) === null){
      return []
    } else {
      return JSON.parse(window.localStorage.getItem('basket'))
    }
  }

    const addToBasket = (item) => {
      if(basket.length === 0){
          let newArray = basket.concat(item)
          setBasket(newArray)
          window.localStorage.setItem('basket', JSON.stringify(basket))
      } else {

        if(basket.filter(e => e.name === item.name).length > 0){
          setBasket(prevState => {
            return prevState.map(prevStateItem => (prevStateItem.name == item.name) ? {...prevStateItem, amount: (prevStateItem.amount + 1)} : prevStateItem)
          });
          window.localStorage.setItem('basket', JSON.stringify(basket))
        } else {
          let newArray = basket.concat(item)
          setBasket(newArray)
          setBasket(prevState => {
            return prevState.map(prevStateItem => (prevStateItem.name == item.name) ? {...prevStateItem, amount: (prevStateItem.amount + 1)} : prevStateItem)
          });
          window.localStorage.setItem('basket', JSON.stringify(basket))
        }
      }
    }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home addToBasket={addToBasket} basket={JSON.parse(window.localStorage.getItem('basket'))}/>}/>
        <Route path="/shop" element={<Shop addToBasket={addToBasket} basket={JSON.parse(window.localStorage.getItem('basket'))}/>}/>
        <Route path="/basket" element={<Basket basket={JSON.parse(window.localStorage.getItem('basket'))}/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;