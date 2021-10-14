import React from "react";
import {useDispatch, useSelector} from "react-redux";


function Basket() {
    const basket = useSelector(state => state.basket)
    return (
        <div className="counter">
            <h1>Basket</h1>
            <p>{}</p>
        </div>
    )
}
export default Basket;