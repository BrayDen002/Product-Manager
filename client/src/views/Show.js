import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useParams, Link, useHistory } from "react-router-dom";


const Show = () => {


    const { id } = useParams()
    const history = useHistory()
    const [productState, setProductState] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setProductState(res.data))
            .catch(err => console.log(err))
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then(res => history.push("/product/new"))
            .catch(err => console.log(err))
    }

    return (

        <div>
            {
                (productState) ?
                    <div>

                        <h1>Title: {productState.title}</h1>
                        <h1>Price: {productState.price}</h1>
                        <h1>Description: {productState.description}</h1>
                        <Link to={`/product/${productState._id}/edit`}>Edit</Link>
                        <button onClick={deleteHandler}>Delete</button>
                    </div>
                    : <h1>Loading....</h1>
            }
        </div>

    )
}


export default Show;