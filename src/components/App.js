
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
    <div>
      <h1>Parent Component</h1>
      <Child1  handleoptionchange={handleoptionchange}/>
      <Child2 handleoptionchange={handleoptionchange} />

      <h3>Selected Option :{selectedOption}</h3>
    </div>
  )
}

export default App
