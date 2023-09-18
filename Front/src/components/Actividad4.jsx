import React from "react";

export default function Actividad3({ reyes }) {
  const increment = (e)=>{
    // e.target.innerHtml
    console.log(++e.target.innerHTML)
  }
  // actividad: buscar reindao de mas de 10 anos y mas de 10 vacas
  const result = reyes
    .filter((e) => e.reinado > 10 && e.vacasComidas > 10)
    .map((e) => (
      <div key={e.nombre}>
        {e.nombre} <div onClick={increment} className="numero">0</div>
      </div>
    ));
  // console.log(result)

  return <>
  <div className="hey " >
    {result}
  </div>
  </>;
}
