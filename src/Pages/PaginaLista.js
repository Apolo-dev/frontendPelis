import React, {useEffect, useState} from 'react'
import './STYLES/PaginaLista.css'
import Navbar from '../Components/Navbar'
import BadgeLista from '../Components/BadgeLista'

import * as PaginaListaServer from '../Pages/server/PaginaListaServer'

const PaginaLista = () => {

    
    const [movie, setMovie] = useState([])

    const ListarMovies = async ()=>
    {
        try
        {
            const res = await PaginaListaServer.ListMovies()
            const data = await res.json()
            setMovie(data.movies)
        }catch(error)
        {
            console.log(error);
        }
    }


    useEffect(()=>
    {
        ListarMovies()
    }, [])




    return (
        <div className="gridLista">
            <div>
                <Navbar />
            </div>
            <div className="gridSegundito">
                <div className="badglista">
                    {movie.map((element)=>
                    (
                        <div className="separarindividuos">
                            <BadgeLista
                            movie = {element}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PaginaLista
