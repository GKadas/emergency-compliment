import React, {useState}from "react"
import logo from './logo.svg';
import "./App.css"

function App() {
  const [compliment, setCompliment] = useState("Hello")
  const [hexCode, setHexCode] = useState("#FFF")


  return (
    <div className="App" background-color={hexCode}>
      <header className="App-header">
        <div className="centered">
          <p>
            {compliment}
          </p>
          <button className="button">Thanks!</button> <button className="button">MEH!</button>
        </div>
      </header>
    </div>
  );
}

export default App;
