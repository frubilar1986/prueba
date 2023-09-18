
import "../node_modules/tailwindcss/tailwind.css";
import Actividad4 from "./components/Actividad4";
import "./myCss.css";

function App() {
  
  //crear useTate

  // const
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

  return (
    <div className="">
      <div className="bg-gray-200 min-h-screen ">
        <header className="bg-blue-500 p-4 text-white sticky top-0">
          <h1 className="text-5xl font-bold">Mi Aplicación</h1>
        </header>
        <main className="container mx-auto px-4">
          {/* Tu contenido aquí */}
          <h2 className="text-xl font-semibold mb-4 text-center ">
            Contenido Principal
          </h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            
          >
            accionar
          </button>

          <div className="cajaCentral"></div>
        </main>
        <div className="container mx-auto p-4 ">
          <Actividad4 reyes={reyes} />
          <h2>Contenido Secndario</h2>
        </div>
      </div>
      <footer className="bg-gray-600  py-8 ">
        <p className="text-center">© {new Date().getFullYear()} Proyecto final</p>
      </footer>
    </div>
  );
}

export default App;
