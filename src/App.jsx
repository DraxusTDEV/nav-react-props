import { useState } from "react";
import Nav from "./components/Nav";
import Boton from "./components/Boton";

const App = () => {
  let [color, setColor] = useState("");
  let [sizeText, setSizeText] = useState("");
  let [backgroundColor, setBackgroundColor] = useState("");
  let [width, setWidth] = useState("");
  let [height, setHeight] = useState("");

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      setColor(e.target.value);
      console.log("setcolor:  " + setColor + typeof setColor);
      return setColor;
    }
  };

  const handleKeyUpText = (e) => {
    if (e.key === "Enter") {
      setSizeText(e.target.value);
      return setSizeText;
    }
  };

  const handleKeyUpBackground = (e) => {
    if (e.key === "Enter") {
      setBackgroundColor(e.target.value);
      return setBackgroundColor;
    }
  };

  const handleKeyUpWidth = (e) => {
    if (e.key === "Enter") {
      setWidth(e.target.value);
      return setWidth;
    }
  };

  const handleKeyUpHeight = (e) => {
    if (e.key === "Enter") {
      setHeight(e.target.value);
      return setHeight;
    }
  };

  const styles = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    color: color,
    fontSize: sizeText,
  };

  return (
    <div>
      <legend>Color de fondo</legend>
      <input
        type="text"
        placeholder="Ingrese el color de fondo"
        onKeyUp={handleKeyUpBackground}
      />

      <legend>Ancho</legend>
      <input
        type="text"
        placeholder="Ingrese el color de fondo"
        onKeyUp={handleKeyUpWidth}
      />

      <legend>Alto</legend>
      <input
        type="text"
        placeholder="Ingrese el color de fondo"
        onKeyUp={handleKeyUpHeight}
      />

      <legend>Color de texto</legend>
      <input
        type="text"
        placeholder="Ingrese el color de texto"
        onKeyUp={handleKeyUp}
      />

      <legend>Tamaño de texto</legend>
      <input
        type="text"
        placeholder="Ingrese el tamaño de texto"
        onKeyUp={handleKeyUpText}
      />

      <Nav {...styles} />
      <Boton texto={"siguiente"} />
      <Boton texto={"anterior"} />
      <Boton texto={"Click aquí"} />
      <Boton />
      <Boton />
      <Boton />
      <Boton />
    </div>
  );
};

export default App;
