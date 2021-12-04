import React from 'react'
import './STYLES/PaginaPeliculas.css'

import Navbar from '../Components/Navbar'
import BadgePelis from '../Components/BadgePelis'

import it from '../Images/it.jpg'
import potter from '../Images/potter.jpg'
import saw from '../Images/saw.jpg'
import titanic from '../Images/titanic.jpg'
import toyStory from '../Images/toyStory.jpg'
import almas from '../Images/7Almas.jpg'
import eraHielo from '../Images/eraHielo.jpg'
import avatar from '../Images/avatar.jpg'


const PaginaPeliculas = () => {



    const peliculas = 
    [
        {
            foto: it,
            nombre: 'It',
            genero: 'Terror',
            año: '2010'
        },

        
        {
            foto: potter,
            nombre: 'Harry Potter',
            genero: 'Ciencia Ficcion',
            año: '2005'
        },

        
        {
            foto: saw,
            nombre: 'Saw',
            genero: 'Terror',
            año: '2006'
        },

        
        {
            foto: titanic,
            nombre: 'Titanic',
            genero: 'Romance',
            año: '1997'
        },

        
        {
            foto: toyStory,
            nombre: 'Toy Story',
            genero: 'Animacion',
            año: '1994'
        },

        
        {
            foto: almas,
            nombre: '7 almas',
            genero: 'Romance',
            año: '2012'
        },


        {
            foto: eraHielo,
            nombre: 'La era del Hielo',
            genero: 'Animacion',
            año: '2005'
        },

        
        {
            foto: avatar,
            nombre: 'Avatar',
            genero: 'Ciencia Ficcion',
            año: '2009'
        }
    ]

    

    const handleClick = (e)=>
    {
        console.log(e.target);    
    }
        
    
    

    return (
        <div className="gridPeliculitas">
            <div>
                <Navbar />
            </div>
            <div className="tituloBonito">
                <h2>Peliculas destacadas</h2>
            </div>
            <div className="gridCuerpoPelis">
                <div>
                    <BadgePelis
                    handleClick={handleClick}
                    pelicula = {peliculas[0]}
                    
                    />
                </div>
                <div>
                    <BadgePelis
                    handleClick={handleClick}
                    pelicula = {peliculas[1]}
                    />
                </div>
                <div>
                    <BadgePelis
                    handleClick={handleClick}
                    pelicula = {peliculas[2]}
                    />
                </div>
                <div>
                    <BadgePelis
                    handleClick={handleClick}
                    pelicula = {peliculas[3]}
                    />
                </div>
                <div>
                    <BadgePelis
                    handleClick={handleClick}
                    pelicula = {peliculas[4]}
                    />
                </div>
                <div>
                    <BadgePelis
                    handleClick={handleClick}
                    pelicula = {peliculas[5]}
                    />
                </div>
                <div>
                    <BadgePelis
                    handleClick={handleClick}
                    pelicula = {peliculas[6]}
                    />
                </div>
                <div>
                    <BadgePelis
                    handleClick={handleClick}
                    pelicula = {peliculas[7]}
                    />
                </div>
            </div>
        </div>
    )
}

export default PaginaPeliculas
