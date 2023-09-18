import "../node_modules/tailwindcss/tailwind.css";
import "./myCss.css";
import { useEffect, useState } from "react";

function App() {
  // const [nombre, setNombre] = useState("");
  // const [imagen, setImagen] = useState("");
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    //crear
    const url = "https://randomuser.me/api/?results=3"; //modificar url
    const peticion = fetch(url); // realiza peticion
    peticion
      .then((datos) => datos.json())
      .then((datos) => {
        datos.results.map((user) => {
          setDatos((e) => 
            [
              ...e,
              <div key={user.email}>
                <div>
                  {user.name.first} {user.name.last}
                </div>
                <div className="box-border h-90 w-80 p-4 border-4 flex">
                  <img src={user.picture.large} />
                </div>
              </div>,
            ]);
        });
        // setNombre(`${data.results[0].name.first} ${data.results[0].name.last}`);
        // setImagen(`${data.results[0].picture.medium}`);
        console.log(datos.results);
      })

      .catch(() => console.log("salio mal la request "));
  },[]);
  return (
    <>
      <div className="container mx-auto">
        <h1>Empleado del Mes: </h1>
        <div>{datos}</div>
      </div>
    </>
  );
}

export default App;

//1 convertir a formato jso
