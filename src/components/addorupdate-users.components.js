import { useState } from 'react';
import { Routes, Route, Link, useParams} from "react-router-dom"
import ProductDataService from "../services/product.service";


// update or add user component 
function AddOrUpdateUser(){

    const params = useParams()

    const [name , setName] = useState('');
    const [role, setRole] = useState('');


    // function get user by id if exist 
    function getUserFromId() {
        ProductDataService.retrive_user(params.users)
        .then(response => {
            setName(response.data.name)
            setRole(response.data.role)
        })
    }

    // function submit for update user if exist or add user if not exist
    function onSubmit(e) {
        if (params.users == -1) {
            console.log("passsss "+params.users)

            let user = {
                name:  document.getElementById('un').value,
                role:  document.getElementById('ur').value
            }   
            ProductDataService.create_user(user)
                .then(() => {})
        }else {
            let user = {
                id: params.users,
                name:  document.getElementById('un').value,
                role:  document.getElementById('ur').value
            }  
            ProductDataService.update_user(user.id, user)
                .then(() => {})
        }
    
        e.preventDefault();
    }

    getUserFromId();

    // create html form to update or add user
    return (
        <div>
            <h3>User</h3>
            <div className="container">
            <div>
                <form>
        <input 
        type="text" 
        name="id" 
        className="form-control"
        defaultValue={params.users}
        />

        <br/>

        <input 
        id="un"
        type="text" 
        name="user_name" 
        className="form-control"
        defaultValue={name}
        onInput={e => setName(e.target.value)} 
        />

        <br/>

        <input 
        id="ur"
        type="text" 
        name="user_role" 
        className="form-control"
        defaultValue={role}
        onInput={e => setRole(e.target.value)} 
        />

        <br/>

        <input type="submit" className="submitButton" onClick={e => {onSubmit(e)}} value="Submit Now"/> 
        </form>
    </div>
            </div>
            
        </div>
    )
}
export default AddOrUpdateUser