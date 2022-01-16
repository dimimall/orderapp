import { useState } from 'react';
import { Routes, Route, Link, useParams} from "react-router-dom";
import {store, useGlobalState} from 'state-pool';
import ProductDataService from "../services/product.service";

//create login user component use retrive_user from backend 
function LoginUser(){

    const params = useParams()

    var login = false

    // user properties as a use state
    const [name , setName] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');
    const [product, setProduct] = useState('');

    //global variable from user when login user
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

    //get user by Id from service 
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


    // submit user by Id and password
    function submitUser() {
        ProductDataService.retrive_user2(params.users,password)
        .then(res => {
            console.log('login user '+res.data.name)
            if (password === res.data.password) {
                window.location.href = product
            }
        })
    }

    // display details of user, add write password and login 
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
        
            <input 
            id="pass"
            type="password" 
            name="user_password" 
            className="form-control"
            defaultValue={role}
            onInput={e => setPassword(e.target.value)} 
            />

            <br/>

            <input
                id="submit"
                type="submit"
                name="Submit"
                className="form-control"
                onClick={submitUser()}
            />

            <br/>

            {/* <td><Link to={product} className="btn btn-primary">Product List</Link></td> */}

            </form>
        </div>
                </div>
                
            </div>
        )
}


export default LoginUser