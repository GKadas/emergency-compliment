import React, {useState}from "react"
import randomColor from "randomcolor"
import "./App.css"

function App() {
  const [compliment, setCompliment] = useState("Hello")
  const [color, setColor] = useState("#282c34")

  const compliments = [
    "You're pretty",
    "You're smart",
    "You're test1",
    "You're test2",
    "You're my heart",
    "You're my soul"
  ]

  function giveCompliment() {
    let item = compliments[Math.floor(Math.random() * compliments.length)];
    let color = randomColor()
    setCompliment(item)
    setColor(color)
  }

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: color}}>
        <div className="centered">
          <p>
            {compliment}
          </p>
          <button className="button" onClick={giveCompliment}>Thanks!</button> <button className="button">MEH!</button>
        </div>
      </header>
    </div>
  );
}

export default App;
