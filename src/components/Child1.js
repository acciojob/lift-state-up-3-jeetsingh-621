import React from 'react'

const Child1 = ({handleoptionchange}) => {
  return (
    <div>
        <h2>Child Component 1</h2>
        <button onClick={()=>handleoptionchange("Option 1")}>Option 1</button>

    </div>
  )
}

export default Child1