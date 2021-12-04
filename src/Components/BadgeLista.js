import React from 'react'
import './CSS/BadgeLista.css'

const BadgeLista = ({movie}) => {
    return (
        <div className="gridtarjeta">
            <div className="tamañoFoto">
                foto
            </div>
            <div className="listaRespuesta">
                <ul>
                    <li><strong>Nombre:</strong> {movie.name_movie}</li>
                    <li><strong>Genero:</strong> {movie.genero_movie}</li>
                    <li><strong>Año:</strong> {movie.year_movie}</li>
                </ul>
            </div>  
        </div>
    )
}

export default BadgeLista
