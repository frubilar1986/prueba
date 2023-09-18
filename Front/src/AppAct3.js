// import MiComponet from './MiComponent';
import { useState } from "react";
import "../node_modules/tailwindcss/tailwind.css";
import Cena from "./components/Cena";

import "./myCss.css";

function App() {
  //crear useTate
  const [total, setTotal] = useState(0);

  // const
  const date = new Date();
  const reyes = [
    {
      nombre: "Atanagildo",
      color: "darkolivegreen",
      precio: 178,
    },
    {
      nombre: "Ervigio",
      color: "crimson",
      precio: 169,
    },
    {
      nombre: "Ataúlfo",
      color: "peru",
      precio: 81,
    },
    {
      nombre: "Leogivildo",
      color: "darkmagenta",
      precio: 126,
    },
    {
      nombre: "Recesvinto",
      color: "royalblue",
      precio: 141,
    },
    {
      nombre: "Sisebuto",
      color: "teal",
      precio: 69,
    },
  ];

  const arr = [
    {
      nombre: "Atanagildo",

      reinado: 15,

      vacasComidas: 9,
    },
    {
      nombre: "Ervigio",

      reinado: 7,

      vacasComidas: 3,
    },
    {
      nombre: "Ata�lfo",

      reinado: 5,

      vacasComidas: 16,
    },
    {
      nombre: "Leovigildo",

      reinado: 18,

      vacasComidas: 3,
    },
    {
      nombre: "Sisebuto",

      reinado: 9,

      vacasComidas: 13,
    },
    {
      nombre: "Recesvinto",

      reinado: 19,

      vacasComidas: 11,
    },
    {
      nombre: "Teodorico",

      reinado: 33,

      vacasComidas: 12,
    },
  ];

  //-----------------

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
          <h3>Total a pagar : $ {total}</h3>
          {/* Tu contenido aquí */}
          <div className="cajaCentral">
            <Cena
              nombre={reyes[0].nombre}
              color={reyes[0].color}
              precio={reyes[0].precio}
              setTotal={setTotal}
            />
            <Cena
              nombre={reyes[1].nombre}
              color={reyes[1].color}
              precio={reyes[1].precio}
              setTotal={setTotal}
            />
            <Cena
              nombre={reyes[2].nombre}
              color={reyes[2].color}
              precio={reyes[2].precio}
              setTotal={setTotal}
            />
            <Cena
              nombre={reyes[3].nombre}
              color={reyes[3].color}
              precio={reyes[3].precio}
              setTotal={setTotal}
            />
            <Cena
              nombre={reyes[4].nombre}
              color={reyes[4].color}
              precio={reyes[4].precio}
              setTotal={setTotal}
            />
          </div>
        </main>
        <div className="container mx-auto p-4 flex flex-nowrap">
          <h2>Main</h2>
        </div>
      </div>
      <footer className="bg-gray-600  py-8 ">
        <p className="text-center">© {date.getFullYear()} Proyecto final</p>
      </footer>
    </div>
  );
}

export default App;
