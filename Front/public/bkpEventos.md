import img0 from "./images/rey_atanagildo.png";
import img1 from "./images/rey_sisebuto.png";
import img2 from "./images/rey_incognito.png";

import { useRef } from "react";
import "./App.css";

function App() {
  const cambio = 20;
  const refCaja = useRef();

  const incrementar = (e) => {
    // alert("hola");
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if (e.target.innerHTML >= 10) {
      e.target.innerHTML = 1;
    }
    if (e.target.innerHTML >= 8) {
      e.target.style.backgroundColor = "red";
    } else {
      e.target.style.backgroundColor = "white";
    }
  };

  const convertir = () => {
    refCaja.current.innerHTML = refCaja.current.innerHTML * cambio;
  };

  const cambia = (e) => {
    // console.log(img0);
    e.target.src.includes("atanagildo")
      ? (e.target.src = img2)
      : (e.target.src = img0);
  };
  function lectura(e) {
    refCaja.current.innerHTML = e.target.value;
    console.log(e.target.value);
  }

  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>
        1
      </div>
      <button onClick={convertir}>Aceptar</button>
      <div>
        <img onClick={cambia} src={img0} />
      </div>
      {/* <img src={img1} /> */}
      <input onChange={lectura} className="campo"></input>
    </>
  );
}

export default App;
