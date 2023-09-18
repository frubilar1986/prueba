import React from "react";

//actividad: 
export default function Actividad1({ reyes }) {
  const url = "https://www.html6.es/img/rey_";
  const result = reyes.map(items => (
    <div key={items.nombre} className="rey">
      {items.nombre} se morfo {items.reinado * items.vacasComidas * 365} vacas en sus {items.reinado} anos de reinado
      <img src={url + items.nombre.toLowerCase() + ".png"} />
    </div>
  ));
  return <>{result}</>;
}
