import React from 'react'
import './STYLES/PaginaInicio.css'

import { Link } from 'react-router-dom'

const PaginaInicio = () => {
    return (
        <div className="gridPeliculas">
            <div>
                <nav>
                    <ul className="ordenarLista">
                        <li><Link to="peliculas">Iniciar Sesion</Link></li>
                        <li><Link to="">Registro</Link></li>
                    </ul>
                </nav>
            </div>
            <div>
                sd
            </div>
        </div>
    )
}

export default PaginaInicio
