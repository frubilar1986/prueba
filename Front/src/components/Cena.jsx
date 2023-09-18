import React from 'react'

export default function Cena({nombre,color,precio,setTotal}) {

    const ruta = 'http://www.html6.es/img/rey_';
    const img = `${ruta}${nombre}.png`
    const comprar = (event)=>{
      setTotal((e)=>e + precio);
      event.target.parentNode.parentNode.style.display = 'none'
    }
  return (
    <>
        <div className='rey' style={{backgroundColor:color }}>
            <h1>{nombre}</h1>
            <img src={img} />
          
            <div className='titulo'>Precio</div>
            <div className='precio'>${precio}</div>
            <div>              
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={comprar} >Comprar</button>
            </div>

        </div>
    </>
  )
}
