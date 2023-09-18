import React from "react";

export default function Actividad2({ reyes }) {
  const url = "https://www.html6.es/img/rey_";
 const eliminar = (e)=>{
 e.target.parentNode.remove()
 }
  return <>
    {reyes.filter(item => !item.nombre.includes('g')).map(item =><div key={item.nombre}>
      {item.nombre}
      <button onClick={eliminar} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-3 rounded" >Borrar</button>
    </div>)}
  </>;
}
  