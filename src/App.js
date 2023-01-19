import React, { useState } from "react"
import { Database } from "./components/Database/Database"
import { FiChevronLeft } from "react-icons/fi"
import { FiChevronRight } from "react-icons/fi"
import { BsFillCircleFill } from "react-icons/bs"
import "./App.css"

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleSlideLeft() {
    const isLastImage = currentIndex === 0

    isLastImage
      ? setCurrentIndex(Database.length - 1)
      : setCurrentIndex(currentIndex - 1)
  }

  function handleSlideRight() {
    const isLastImage = currentIndex === Database.length - 1

    isLastImage ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
  }

  function handleNavigation(e) {
    const selected = e.target.dataset.index

    setCurrentIndex(parseInt(selected))
  }

  return (
    <div className="image-slider-container">
      <div className="image-slider">
        <div className="arrow-icon arrow-left" onClick={handleSlideLeft}>
          <FiChevronLeft />
        </div>
        <div className="arrow-icon arrow-right" onClick={handleSlideRight}>
          <FiChevronRight />
        </div>
        <div className="navigate">
          {Database.map((data, index) => {
            return (
              <BsFillCircleFill
                key={index}
                data-index={index}
                className={index === currentIndex ? "selected" : null}
                onClick={handleNavigation}
              />
            )
          })}
        </div>
        {Database.map((data, index) => {
          return (
            <img
              src={data.imageLink}
              key={index}
              className={currentIndex === index ? "active" : null}
              alt={""}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
