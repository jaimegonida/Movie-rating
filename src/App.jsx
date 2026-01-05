import React, { useState } from "react"
import "./App.css"


const Card = ({ title }) => {
  const[hasLiked, setHasLiked] = useState( false );
  const[count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={() => {
        setHasLiked(!hasLiked)
        setCount(count + 1)
      }}>
        {hasLiked ? "Liked" : "Like"}
      </button>
    <h2>{count}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
      <h2>Functional Arrow Component</h2>

      <Card title="Star Wars"/>
      <Card title="Avatar"/>
      <Card title="The Lion King"/>
    </div>
  )
}

export default App