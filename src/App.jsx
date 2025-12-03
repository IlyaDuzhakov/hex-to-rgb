import { useState } from "react";
import changeColor from "./converter";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [rgb, setRgb] = useState("");

  const convertColor = (event) => {
    setColor(event.target.value); // при изменении значения input мы меняем значение переменной color
    if (event.target.value.length === 7 && color[0] === "#") {
      const rezult = changeColor(event.target.value); // rezult - это цвет rgb
      setRgb(rezult);
    }
  };

  return (
    <div className="App" style={{ backgroundColor: rgb }}>
      <input className="input"
        type="text"
        placeholder="Введите hex-цвет"
        value={color}
        onChange={(event) => {
          convertColor(event);
        }}
      />
      <div style={{backgroundColor: rgb }} className="rgb">{rgb}</div>
    </div>
    
  );
}

export default App;
