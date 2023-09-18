import "../node_modules/tailwindcss/tailwind.css";
import "./myCss.css";
import { useEffect, useState } from "react";

function App() {
  const [chiste, setChiste] = useState([]);// se inicia de tipo array para que muestre todo los datos
  const otro = () => {
    const url = "https://v2.jokeapi.dev/joke/Any?lang=es";
    // const url = "http://api.icndb./jokes/random";
    const peticion = fetch(url);
    peticion
      .then((data) => data.json())
      .then(lectura => lectura.value.map(chistes => 
        setChiste(e=>[...e,
        <div className="" key={data.id}>
          {chistes.joke}
        </div>
        ])
      ))
      
      .catch(console.log);
  };

  //usar useEffect!!!!
  useEffect(() => {
    otro();
  }, []);

  return (
    <>
      {chiste}
      
    </>
  );
}

export default App;

//1 convertir a formato jso
