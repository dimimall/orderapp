import { useState } from 'react';
import { Routes, Route, Link, useParams} from "react-router-dom";
import {store, useGlobalState} from 'state-pool';
import ProductDataService from "../services/product.service";


function LoginUser(){

    const params = useParams()

    const [name , setName] = useState('');
    const [role, setRole] = useState('');
    const [userId, setUserId] = useState('');
    const [product, setProduct] = useState('');

    window.$user = params.users;

    function checkUserRole(role){
        if (role === "admin")
        {
            return '/product'
        }
        else if(role == "user"){
            return '/product_public'
        }
    }

    function getUserFromId() {
        ProductDataService.retrive_user(params.users)
        .then(response => {
            setName(response.data.name)
            setRole(response.data.role)
            setUserId(response.data.id)

            if (response.data.role) {
                setProduct(checkUserRole(response.data.role))
            }
        })
    }

    getUserFromId();
    
        return (
            <div>
                <h3>User</h3>
                <div className="container">
                <div>
                    <form>
            <input 
            disabled
            type="text" 
            name="id" 
            className="form-control"
            defaultValue={params.users}
            />
        
            <br/>
        
            <input 
            disabled
            id="un"
            type="text" 
            name="user_name" 
            className="form-control"
            defaultValue={name}
            onInput={e => setName(e.target.value)} 
            />
        
            <br/>
        
            <input 
            disabled
            id="ur"
            type="text" 
            name="user_role" 
            className="form-control"
            defaultValue={role}
            onInput={e => setRole(e.target.value)} 
            />
        
            <br/>
        
            <td><Link to={product} className="btn btn-primary">Product List</Link></td>

            </form>
        </div>
                </div>
                
            </div>
        )
}


export default LoginUser