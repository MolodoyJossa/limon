import React, { useState } from "react";
import BMW from'../img/vector-1@2x.svg'


const CarBrand = function () {

    const[brand, setBrand] = React.useState(0);
    
    return (
        <div class="auto">
            <button onClick={() => setBrand(2)} className={`${brand == 2 `name_of_car_radio_btn_show` != 2 `name_of_car_radio_btn_hide`}`}>
                <img class="carsvg" src={BMW}/>
            </button>     
        </div>
    )
}

export default CarBrand;