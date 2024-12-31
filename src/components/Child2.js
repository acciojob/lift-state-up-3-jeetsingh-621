import React from 'react'

const Child2 = ({handleoptionchange}) => {
  return (
    <div>
        <h2>Child Component 2</h2>
        <button onClick={()=>handleoptionchange("option 2")}>option 2</button>

    </div>
  )
}

export default Child2