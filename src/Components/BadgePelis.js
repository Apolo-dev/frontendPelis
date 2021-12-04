import React from 'react'
import './CSS/BadgePelis.css'

const BadgePelis = ({handleClick, pelicula}) => {


    
    return (
        <div className="card general">
            <div className="card-body">
                <div className="tamañoFoto">
                    <img src={pelicula.foto} alt="foto" />
                </div>
                <div >
                    <ul>
                        <li><strong>Nombre:</strong>{pelicula.nombre} </li>
                        <li><strong>Genero:</strong>{pelicula.genero}  </li>
                        <li><strong>Año:</strong>{pelicula.año} </li>
                    </ul>
                    <div className="centrarlawea">
                        <button onClick={handleClick} className="btn btn-danger arreglarBoton">
                            Comprar
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default BadgePelis
