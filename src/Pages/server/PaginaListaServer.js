
const API_URL = 'http://127.0.0.1:8000/api/movies/'


export const ListMovies = async ()=>
{
    return await fetch(API_URL)
}

export const RegisterMovie = async (newMovie)=>
{
    return await fetch(API_URL, 
        {
            method: 'POST',
            headers: 
            {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "name_movie": String(newMovie.name_movie).trim(),
                    "genero_movie": String(newMovie.genero_movie).trim(),
                    "year_movie": String(newMovie.year_movie).trim(),
                })
        })
}