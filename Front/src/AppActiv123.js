import imagen0 from "./images/reyes/rey_atanagildo.png";
import imagen1 from "./images/reyes/rey_ataulfo.png";
import imagen2 from "./images/reyes/rey_teodorico.png";
import imagenx from "./images/reyes/rey_incognito.png";
import react, { useState } from "react";
import "../node_modules/tailwindcss/tailwind.css";

import "./myCss.css";

function App() {
  //crear useTate
  const [name, setName] = useState("nada");
  let [contador, setContador] = useState(0);
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [resultado, setResultado] = useState();
  const [mensaje, setMensaje] = useState();
  const [cont, setCont] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [res1, setRes1] = useState(0);
  const [res2, setRes2] = useState(0);
  const [res3, setRes3] = useState(0);
  const [res4, setRes4] = useState(0);

  // const
  const reyesGodos = [
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },
    {
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },
    {
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar",
    },
  ];
  const cambios=[
    {
      moneda: "Euro",
      cambio:1,
    },{
      moneda: "Peso argentino",
      cambio:118.6,
    },{
      moneda: "Peso colombiano",
      cambio:4543.5,
    },{
      moneda: "Peso mexicano",
      cambio:23.2,
    },{
      moneda: "Dólar",
      cambio:1.14
    }
  ]

  //-----------------

  const nombre = ["Atanaguildo", "Ataulfo", "teodorico"];
  const date = new Date();

  const cambiaTexto = (e) => {
    e.target.innerHTML != "Visto"
      ? (e.target.innerHTML = "Visto ")
      : (e.target.innerHTML = " ");
  };

  const cambiaImg = (e) => {
    if (!e.target.src.includes("incog")) {
      // console.log(e);
      e.target.src = imagenx;
    } else {
      e.target.style.visibility = "hidden";
    }
    e.target.parentNode.style.backgroundColor = "white";
  };

  // let name = "francisco";
  const cambiarNom = () => {
    // name = 'emilio';
    setName("FranciscoEmilioRubilar");
    console.log(name);
  };

  const sumar = () => {
    setResultado(Number(num1) + Number(num2));
  };

  const mod1 = (e) => {
    setNum1(e.target.value);
    console.log(e.target.value);
  };
  const mod2 = (e) => {
    setNum2(e.target.value);
    console.log(e.target.value);
  };

  const cambiaMsj = () => {
    setCont(cont + 1);
    if (cont+1 >= reyesGodos.length) {
      setCont(0);
    }
    console.log(cont);
    setMensaje(
      <h2>
        La aficion principal de{" "}
        <span className="rojo"> {reyesGodos[cont].nombre} </span>es{" "}
        <span className="verde">{reyesGodos[cont].aficion}</span>{" "}
      </h2>
    );
  };
  const modif = (e)=>{
    setCantidad(e.target.value)
    setRes1(e.target.value * cambios[1].cambio)
    setRes2(e.target.value * cambios[2].cambio)
    setRes3(e.target.value * cambios[3].cambio)
    setRes4(e.target.value * cambios[4].cambio)
  }

  return (
    <div className="">
      <div className="bg-gray-200 min-h-screen ">
        <header className="bg-blue-500 p-4 text-white ">
          <h1 className="text-5xl font-bold">Mi Aplicaciónn</h1>
        </header>
        <main className="container mx-auto p-4">
          <h2 className="text-xl font-semibold mb-4 text-center ">
            Contenido Principal
          </h2>
          {/* Tu contenido aquí */}
          <div>
            <h3>Mi nombre es {name}</h3>

            <button
              onClick={cambiarNom}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Cambiar nombre
            </button>
          </div>
          <div className="container flex justify-items-center ">
            <div className="caja">
              <img onClick={cambiaImg} src={imagen0}></img>
              <div onClick={cambiaTexto} className="nombre text-center">
                {nombre[0]}
              </div>
            </div>
            <div className="caja">
              <img onClick={cambiaImg} src={imagen1}></img>
              <div onClick={cambiaTexto} className="nombre text-center">
                {nombre[1]}
              </div>
            </div>
            <div className="caja">
              <img onClick={cambiaImg} src={imagen2}></img>
              <div onClick={cambiaTexto} className="nombre text-center">
                {nombre[2]}
              </div>
            </div>
          </div>
        </main>
        <div className="container mx-auto p-4 flex flex-nowrap">
          <button
            onClick={() => setContador(++contador)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            aumentar
          </button>
          <button
            onClick={() => {
              setContador(--contador);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            disminuir
          </button>
          <button
            onClick={() => setContador(0)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            restablecer
          </button>
          <div className="caja">{contador}</div>
        </div>
        <div>
          <input type="number" value={num1} onChange={mod1} />+
          <input type="number" value={num2} onChange={mod2} />=
          <input type="number" value={resultado} readOnly />
          <br />
          <button
            onClick={sumar}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sumar
          </button>
        </div>
        <div>
          <button
            onClick={cambiaMsj}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
          >
            Ver siguiente
          </button>
        </div>
        <div>{mensaje}</div>
        <div className="flex flex-col ml-5">
          {/*modificar monedas */}
          
          <label htmlFor="u0">{cambios[0].moneda}</label>
          <input id='u0' type="number" value={cantidad} onChange={modif} />
          
          <label htmlFor="u1">{cambios[1].moneda}</label>
          <input id='u1' type="number" value={res1} readOnly  />
          <label htmlFor="u1">{cambios[2].moneda}</label>
          <input id='u2' type="number" value={res2} readOnly  />
          <label htmlFor="u1">{cambios[3].moneda}</label>
          <input id='u3' type="number" value={res3} readOnly  />
          <label htmlFor="u1">{cambios[4].moneda}</label>
          <input id='u4' type="number" value={res4} readOnly  />

        </div>
      </div>
      <footer className="bg-gray-600  py-8 ">
        <p className="text-center">© {date.getFullYear()} Proyecto final</p>
      </footer>
    </div>
  );
}

export default App;
