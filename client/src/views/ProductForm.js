import React, {useState} from 'react'
import axios from "axios"

const ProductForm = () => {

    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product/new", {
            title, price, description
        })
            .then(res => console.log(res))
            .catch(err=> console.log(err))
    }

    return (
            <form onSubmit={submitHandler}>
                <p>
                    Title:
                    <input type="text" name="title" id="" onChange={(e)=>setTitle(e.target.value)} value={title} />
                </p>
                <p>
                    Price:
                    <input type="number" name="price" id="" onChange={(e)=>setPrice(e.target.value)} value={price} placeholder="Enter a price" />
                </p>
                <p>
                    Description:
                    <input type="text" name="description" id="" onChange={(e)=>setDescription(e.target.value)} value={description} />
                </p>
                <button type="submit">Create</button>
            </form>
    )
}

export default ProductForm