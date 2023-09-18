import React from "react";

export default function Map() {
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

  const resultado = reyes
    .filter((value) => value.vacasComidas >= 10)
    .map((value) => (
      <div key={value.nombre}>
        {value.nombre} come {value.vacasComidas} al dia
      </div>
    ));

    const resFind = reyes.find(item => item.vacasComidas == 11)

  // console.log(resFind);

  return (
    <>
      <div className="caja">{resFind.nombre} come trapo</div>
    </>
  );
}
