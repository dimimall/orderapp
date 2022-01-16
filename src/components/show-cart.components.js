import { useState } from 'react';
import { Link, useParams} from "react-router-dom"
import ProductDataService from "../services/product.service";


// show cart component
function ShowCart(){    
    const [cart , setCart] = useState([]);


    // function get cart by Id user from get api
    function getCartByUserId(){
        ProductDataService.retrive_cart(window.$user)
        .then(response => {
            setCart(response.data)
            console.log(response.data);
        })
    }

    getCartByUserId()


    // return all products of cart user
    return (
        <div className="container">
            <h3>Your Cart</h3>
            <table className="table">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                {
                    cart.map (
                        c => 
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.productName}</td>
                            <td>{c.productPrice}</td>
                            <td>{c.quantity}</td>
                        </tr> 
                    )
                }
                </tbody>
            </table>
        </div>
    )
}
export default ShowCart