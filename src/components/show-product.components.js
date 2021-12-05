import { useState } from 'react';
import { Routes, Route, Link, useParams} from "react-router-dom"
import ProductDataService from "../services/product.service";

function ShowProduct(){
    const params = useParams()
    
    const [itemName , setItemName] = useState('');
    const [productPrice, setProductPrice] = useState('');


    function getProductFromId() {
        ProductDataService.retrive(params.params)
        .then(response => {
            setItemName(response.data.itemName)
            setProductPrice(response.data.productPrice)
        })
    }

    getProductFromId()


    return (
        <div>
            <h1 className="text-center">Product</h1>
            <div className="container">
            <center>
                <div class="d-flex flex-column-reverse bd-highlight mb-3">
                    <div class="p-2 bd-highlight">Product name {itemName}</div>
                    <div class="p-2 bd-highlight">Product Price {productPrice}</div>
                </div>
             </center>
            </div>
        </div> 
    )
}
export default ShowProduct