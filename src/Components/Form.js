import React from 'react'
import './CSS/Form.css'

const Form = ({handleSubmit,handleChange, peli}) => {
    return (
        <div className="card gener">
            <div className="card-header ff">
                <h3>Ingresa la Pelicula</h3>
            </div>
            <form className="card-body" onSubmit={handleSubmit} > 
                <div className="form-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nombre"
                    name='name_movie'
                    value={peli.name_movie}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Genero"
                    name='genero_movie'
                    value={peli.genero_movie}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                    type="int" 
                    className="form-control" 
                    placeholder="Año de estreno"
                    name='year_movie'
                    value={peli.year_movie}
                    onChange={handleChange}
                    />
                </div>
                <div className="moverbot">
                    <button className="btn btn-danger botoncitopapi">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
