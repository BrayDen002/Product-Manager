import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

    
const ProductList = (props) => {
    const [product, setProducts] = useState([]);
    const [state, setState] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [state])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
        .then(res => setState(!state))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h3>All Products</h3>
            {props.product.map( (product, i) =>
                <p key={i}>
                    <Link to={`/product/${product._id}`}>{product.title}</Link> |
                    <Link to={`/product/${product._id}/edit`}> Edit </Link> |
                    <button onClick={() => deleteHandler(product._id)}>Delete</button>
                    </p>
            )}
        </div>
    )
}
    
export default ProductList;

