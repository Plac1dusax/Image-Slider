import React from "react"
import { Database } from "./components/Database"
import "./App.css"

function App() {
  return (
    <div className="image-slider-container">
      <div className="image-slider">
        {Database.map(data => {
          return <img src={data.imageLink} />
        })}
      </div>
    </div>
  )
}

export default App
