
import React, { useState } from "react";
import './../styles/App.css';
import Child1 from "./Child1";
import Child2 from "./Child2";

const App = () => {

  const [selectedOption, setselectedOption] = useState("");

  const handleoptionchange = (option)=>{
setselectedOption(option);
  }
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <Child1  handleoptionchange={handleoptionchange}/>
      <Child2 handleoptionchange={handleoptionchange} />

      <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default App
