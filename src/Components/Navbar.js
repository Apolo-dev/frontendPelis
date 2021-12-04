import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Navbar.css'

const Navbar = () => {
    return (
        <div className="container-flex navGeneral">
            <ul>
                <li><Link to="peliculas">Home</Link></li>
                <li><Link to="form">Formulario</Link></li>
                <li><Link to="lista">Lista</Link></li>
                <li><Link to="">Genero</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
