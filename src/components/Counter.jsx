import React, { useState } from "react";

const Counter = function () {
    const [count, setCount] =useState(0)
     
    function increment() {
        setCount(count + 50);
    }
    function decrement() {
        setCount(count - 50);
    }

    return(
        <div>

            <div class="pricebar">

                <p class="price">Цена:</p>

                <div class="summa_bar">

                    <button onClick={decrement} class="rectangle_minus">
                        <p class="minus">-</p>
                    </button>

                    <div class="rectangle_price">
                        <p class="summa">{count}₽</p>
                    </div>

                    <button onClick={increment} class="rectangle_plus">
                        <p class="plus">+</p>
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Counter;