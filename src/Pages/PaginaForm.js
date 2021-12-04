import React, {useState} from 'react'
import './STYLES/PaginaForm.css'
import Navbar from '../Components/Navbar'
import Form from '../Components/Form'
import * as PaginaListaServer from '../Pages/server/PaginaListaServer'
import { useHistory } from 'react-router'

const PaginaForm = () => {

    const history = useHistory()

    const [peli, setPeli] = useState([])
    


    const handleChange = (e)=>
    {
        setPeli({...peli, [e.target.name]: [e.target.value]})
    }

    const handleSubmit = async (e)=>
    {
        e.preventDefault()

        try
        {
            let res;
            res = await PaginaListaServer.RegisterMovie(peli)
            const data = await res.json()
            if (data.message === "Success")
            {
                setPeli(peli)
            }
            history.push('/lista')
        }catch(error)
        {
            console.log(error);
        }

    }


    return (
        <div className="gridForm">
            <div>
                <Navbar />
            </div>
            <div className="grisFormCuer">
                <div>
                    <Form
                    handleSubmit={handleSubmit}
                    handleChange = {handleChange}
                    peli={peli}
                    />
                </div>
                <div>
                    sd
                </div>
                <div>
                    sd
                </div>
            </div>
        </div>
    )
}

export default PaginaForm
