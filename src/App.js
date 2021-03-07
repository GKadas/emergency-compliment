import React, {useState, useEffect}from "react"
import randomColor from "randomcolor"
import "./App.css"

const COMPLIMENTS_API_URL = "https://raw.githubusercontent.com/GKadas/emergency-compliment/main/src/pool/aoc.json"

function App() {
  const [compliments, setCompliments] = useState([])
  const [item, setItem] = useState("Hello")
  const [color, setColor] = useState("#282c34")


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

  function giveCompliment() {
    let item = compliments[Math.floor(Math.random() * compliments.length)];
    let color = randomColor()

    setColor(color)
    setItem(item)
  }

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: color}}>
        <div className="centered">
          <p>
            {item}
          </p>
          <div>
            <button className="button" onClick={giveCompliment}>Thanks!</button>
            <button className="button">MEH!</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
