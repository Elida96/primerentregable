import { useState } from 'react';
import Mascotas from './components/Mascotas';
import Card from './components/Card';
import './App.css';

function App() {
    const [nombre, setNombre] = useState("");
    const [raza, setRaza] = useState("");

    const handleMascotaSubmit = (data) => {
        setNombre(data.nombre);
        setRaza(data.raza);
    };

    return (
        <>
            <Mascotas onMascotaSubmit={handleMascotaSubmit} />
           
            <Card nombre={nombre} raza={raza} />
        </>
    );
}

export default App;
