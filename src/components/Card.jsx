import React from 'react'

const Card = ({nombre,raza}) => {
    if (nombre!=""){
        return (
            <div>
                <h1>Me alegra que te gusten las mascotas</h1>
                <p>Nombre: {nombre}</p>
                <p>Raza: {raza}</p>
                
                
        
            </div>
          )
    } else {return null}
  
}

export default Card