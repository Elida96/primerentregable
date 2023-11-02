import React from 'react'
import { useState } from 'react'

const Mascotas = ({ onMascotaSubmit }) => {
    const [nombre, setNombre] = useState("")
    const [raza, setRaza] = useState("")
    const [validacion, setValidacion] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()
        
        if([nombre,raza].includes("")){
           setValidacion (true)
        }else{
            setValidacion (false)
            onMascotaSubmit({ nombre, raza });
        }
    }

return (
   <form  onSubmit={handleSubmit}>
        <label htmlFor='raza'>Raza: </label>
        <input
                    type='text'
                    placeholder='Escriba la raza de su mascota'
                    id='raza'
                    value={raza}
                    onChange={e =>setRaza(e.target.value)}
                />
            <label htmlFor='nombre'>Nombre: </label>
                 <input
                    type='text'
                    placeholder='Escriba el nombre de su mascota'
                    id='nombre'
                    value={nombre}
                    onChange={e =>setNombre(e.target.value)}
                    />

                    <input
                    type="submit"
                    value="Enviar datos"
                />
                {validacion?(
                    <p>Por favor cheque que la información sea correcta</p>

                ) : null}
                
   </form>
  )
}


export default Mascotas