import React, {useState} from "react";
import CarBrand from "./components/CarBrand";
import Counter from "./components/Counter";
import './style.css'



function App() {

  return (
    <div className="App">
      <CarBrand/>
      <Counter/>
    </div>
  );
}

export default App;