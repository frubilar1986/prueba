import "../node_modules/tailwindcss/tailwind.css";
import "./myCss.css";
// import { useEffect, useState } from "react";
import HomeSearchBar from "./components/HomeSearchBar";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";



function App() {
  

  return (
    <>
    <div className="flex flex-col  items-center w-full p-1 bg-gray-50 dark:bg-gray-300 text-black">
      {/* <Header /> */}
      <HomeSearchBar />
      <div className="mt-10 flex flex-wrap justify-evenly duration-300 gap-4 lg:gap-8 w-full lg:px-5">
       
        <div className="hidden xl:block">
          {/* <Card /> */}
        
        </div>
        <div className="hidden xl:block">
        </div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
    </div>
        <Footer/>
    </>
  );
}

export default App;


