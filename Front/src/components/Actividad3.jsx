import React from "react";

export default function Actividad3({ reyes }) {
  const result = reyes.find(
    (item) =>
      item.nombre.substring(0, 1) == "e" || item.nombre.substring(0, 1) == "E"
  );

  return (
    <>
      <div>
        {result == undefined ? "Sin resultados" : result.nombre} es el rey
      </div>
    </>
  );
}
