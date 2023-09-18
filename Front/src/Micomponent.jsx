import React from 'react'

export default function MiComponent(props) {
    // console.log(props)
  return (
    <div>
      <h1>El rey {props.rey} se come {props.reses} trabas al mes </h1>
    </div>
  )
}

MiComponent.defaultProps={
    reses : "indefinido",
    rey : "Sauron!!!"
}