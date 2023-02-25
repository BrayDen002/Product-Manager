import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useHistory, useParams } from 'react-router-dom'

const UpdateForm = (props) => {

    const history = useHistory()
    const { id } = useParams()
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(null)
    const [description, setDescription] = useState('')

    const [validState, setValidState] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/update/' + id, {
            title,
            price,
            description
        })
            .then(res => { history.push("/product/new") })
            .catch(err => {
                // console.log("CATCH: ", err.response.data)
                const { errors } = err.response.data
                let errorObj = {}
                for (let [key, value] of Object.entries(errors)) {
                    errorObj[key] = value.message
                }
                setValidState(errorObj)
            })
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text"
                        name="title"
                        placeholder={title}
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} />
                    {(validState.title) ? <p style={{ color: "red" }}>{validState.title}</p> : null}
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number"
                        name="title"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }} />
                    {(validState.price) ? <p style={{ color: "red" }}>{validState.price}</p> : null}
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text"
                        name="description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                    {(validState.description) ? <p style={{ color: "red" }}>{validState.description}</p> : null}
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default UpdateForm