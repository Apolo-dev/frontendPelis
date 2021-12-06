import React from 'react'
import './CSS/NavInicio.css'

import { Link } from 'react-router-dom'

const NavInicio = () => {
    return (
        <div className="gridNavInicio">
            <div>
                
            </div>
            <div className="listaaaa">
                <Link to="peliculas">Iniciar Sesion</Link>
            </div>
            <div className="listaaaa">
                <Link to="registro">Registarse</Link>
            </div>
        </div>
    )
}

export default NavInicio
