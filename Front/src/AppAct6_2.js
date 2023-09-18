import "../node_modules/tailwindcss/tailwind.css";
import "./myCss.css";
import { useEffect, useState } from "react";

function App() {
  const [chiste, setChiste] = useState("");
  const cambia = () => {
    const url = "https://v2.jokeapi.dev/joke/Any?lang=es";
    // const url = "http://api.icndb./jokes/random";
    const peticion = fetch(url);
    peticion
      .then((data) => data.json())
      .then((data) => console.log(data))
      .then((data) => {
        setChiste(
          <div key={data.setup}>
            <div>
              {data.setup} <br />
              {data.delivery}
            </div>
          </div>
        );
      })
      .catch(console.log);
  };

  //usar useEffect!!!!
  useEffect(() => {
    cambia();
  }, []);

  return (
    <>
      {chiste}
      <button onClick={cambia}>Otro chiste</button>
    </>
  );
}

export default App;

//1 convertir a formato jso
