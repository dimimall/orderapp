import { useState } from 'react';
import { Routes, Route, Link, useParams} from "react-router-dom"
import ProductDataService from "../services/product.service";
import ProductList from './product-list.component';

function AddProduct(){

    const params = useParams()

    const [itemName , setItemName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    

    function getProductFromId() {
        if (params.params == -1) {
            return
        }else{
            ProductDataService.retrive(params.params)
                .then(response => {
                    setItemName(response.data.itemName)
                    setProductPrice(response.data.productPrice)
            })
        }
    }
    
    const handleSubmit= (e) => {
        let pname = document.getElementById('pn').value
        console.log("item name product price "+pname)

        e.preventDefault();
    }

    function onSubmit(e) {
        if (params.params == -1) {
            console.log("passsss "+params.params)

            let product = {
                itemName:  document.getElementById('pn').value,
                productPrice:  document.getElementById('pp').value
            }   
            ProductDataService.create(product)
                .then(() => {})
        }else {
            let product = {
                id: params.params,
                itemName:  document.getElementById('pn').value,
                productPrice:  document.getElementById('pp').value
            }  
            ProductDataService.update(product.id, product)
                .then(() => {})
        }
    
        e.preventDefault();
    }

    getProductFromId();

        return (
            <div>
                <h3>Product</h3>
                <div className="container">
                <div>
                    <form>
            <input 
            type="text" 
            name="id" 
            className="form-control"
            defaultValue={params.params}
            />

            <br/>

            <input 
            id="pn"
            type="text" 
            name="product_name" 
            className="form-control"
            defaultValue={itemName}
            onInput={e => setItemName(e.target.value)} 
            />

            <br/>

            <input 
            id="pp"
            type="text" 
            name="product_price" 
            className="form-control"
            defaultValue={productPrice}
            onInput={e => setProductPrice(e.target.value)} 
            />

            <br/>

            <input type="submit" className="submitButton" onClick={e => {onSubmit(e)}} value="Submit Now"/> 
            </form>
        </div>
                </div>
                <div className="main">
                    {/* Define all the routes */}
                    <Routes>
                        <Route path="/product" element={<ProductList />}></Route>
                    </Routes>
                </div>
            </div>
        )
    
}
export default AddProduct