import { useState } from 'react';
import { Routes, Route, Link, useParams} from "react-router-dom"
import ProductDataService from "../services/product.service";

// show each product details
function ShowProduct(){
    const params = useParams()
    
    // create properties of product model 
    const [itemName , setItemName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [userId, setUserId] = useState('');

    // get product by Id from get api
    function getProductFromId() {
        ProductDataService.retrive(params.params)
        .then(response => {
            setItemName(response.data.itemName)
            setProductPrice(response.data.productPrice)
        })
    }

    getProductFromId()

    // function add product to cart
    function addToCart(e) {
        let product = {
            quantity: document.getElementById('quantity').value,
            productName: itemName,
            productPrice: productPrice,
            productId: params.params,
            userId: window.$user
        }
        // add product to cart table database via post api
        ProductDataService.create_cart(product)
        .then(() => {alert('Add product')})

        e.preventDefault();
    }

    // display product details and add quantity of product text field 
    return (
        <div>
            <h1 className="text-center">Product</h1>
            <div className="container">
            <center>
                <div class="d-flex flex-column-reverse bd-highlight mb-3">
                    <div class="p-2 bd-highlight">Product id {params.params}</div>
                    <div class="p-2 bd-highlight">Product name {itemName}</div>
                    <div class="p-2 bd-highlight">Product Price {productPrice}</div>
                </div>
                <div class="row justify-content-center">
                <div class="form-group">
                    <label for="quantity">Quantity:</label>
                    <input type="text" class="form-control" id="quantity" defaultValue={0} onInput={e => setQuantity(e.target.value)}/>
                    <br></br>
                    <button type="button" class="btn btn-primary" onClick={e => addToCart(e)}>Add</button>
                </div>
                </div>
                <Link to={`/showcart`} className="btn btn-primary">Show your cart</Link>
             </center>
            </div>
        </div> 
    )
}
export default ShowProduct