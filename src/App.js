import React, {useState, useEffect}from "react"
import randomColor from "randomcolor"

import 'remixicon/fonts/remixicon.css'

import "./App.css"

const COMPLIMENTS_API_URL = "https://raw.githubusercontent.com/GKadas/emergency-compliment/main/src/pool/aoc.json"

function App() {
  const [compliments, setCompliments] = useState([])
  const [item, setItem] = useState("Hello")
  const [color, setColor] = useState("#282c34")
  const [count, setCount] = useState(0)


  useEffect(() => {
    fetch(COMPLIMENTS_API_URL)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setCompliments(data)
        })
        .catch(error => {
            console.log(error);
        })
  }, [])

  function increment (){
    setCount(prevCount => prevCount + 1)
  }

  function giveCompliment () {
    let item = compliments[Math.floor(Math.random() * compliments.length)];
    let color = randomColor()
    increment()

    setColor(color)
    setItem(item)
  }

  function saidMEH () {
    let item = compliments[Math.floor(Math.random() * compliments.length)];
    let color = randomColor()

    setColor(color)
    setItem(item)
  }

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: color}}>
        <div>
          <i class="ri-heart-3-fill" style={{position: "absolute", top: "8px", left: "8px"}}>{count}</i>
        </div>
        <div className="compliment">
          <p>
            {item}
          </p>
          <div className="buttonArea">
            <button className="button" onClick={giveCompliment}>Thanks!</button>
            <button className="button" onClick={saidMEH}>MEH!</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

<div>
  <i class="ri-admin-fill"></i>
</div>