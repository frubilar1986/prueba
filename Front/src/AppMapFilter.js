import Map from './components/Map';
import { useState } from "react";
import "../node_modules/tailwindcss/tailwind.css";

import "./myCss.css";

function App() {
  //crear useTate

  // const
   const date = new Date();


  const reyes = [
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
      nombre: "Ataulfo",
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
  function inicio() {
    const resultF = reyes.filter(item => item.vacasComidas >= 10)
    .map((item) => {
      let texto = `${item.nombre} - ${item.reinado}`;
      // console.log(texto);
      return texto;
      //filter 
    });

    //  console.log(resultF);
  }
 

  return (
    <div className="">
      <div className="bg-gray-200 min-h-screen ">
        <header className="bg-blue-500 p-4 text-white ">
          <h1 className="text-5xl font-bold">Mi Aplicaciónn</h1>
        </header>
        <main className="container mx-auto p-4">
          {/* Tu contenido aquí */}
          <h2 className="text-xl font-semibold mb-4 text-center ">
            Contenido Principal
          </h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={inicio}
          >
            Comprar
          </button>
            <Map />

          <div className="cajaCentral"></div>
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
