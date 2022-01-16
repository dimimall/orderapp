import axios from 'axios'

const ORDER_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `/api`

//add headers
const 
    headers= {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }

// Create services to connect with Rest api 
class ProductDataService {

    // get all products
    getAll(){
        return axios.get(`${INSTRUCTOR_API_URL}/products`);
    }

    // create product json application
    create(data) {
        return axios.post(`${INSTRUCTOR_API_URL}/create`, data, {headers});
    }

    // update product by Id and json application
    update(id,data) {
        return axios.put(`${INSTRUCTOR_API_URL}/upload/${id}`, data, {headers});
    }

    // delete product by Id 
    delete(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/delete/${id}`,{headers});
    }

    // retrieve product by id
    retrive(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/products/${id}`, {headers})
    }

    redirect() {
        return axios.get(`${INSTRUCTOR_API_URL}/add/redirect`, {headers})
    }

    // get all users
    getAllUsers(){
        return axios.get(`${INSTRUCTOR_API_URL}/users`);
    }

    //retrive user by Id
    retrive_user(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/users/${id}`, {headers})
    }

    // retrive user by id and password
    retrive_user2(id,password) {
        return axios.get(`${INSTRUCTOR_API_URL}/users/${id}/${password}`, {headers})
    }

    // create user with json application
    create_user(data) {
        return axios.post(`${INSTRUCTOR_API_URL}/create/user`, data, {headers});
    }

    // update user by Id and json application
    update_user(id,data) {
        return axios.put(`${INSTRUCTOR_API_URL}/upload/user/${id}`, data, {headers});
    }

    // delete user by Id
    delete_user(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/delete/user/${id}`,{headers});
    }

    // retrieve car by user Id
    retrive_cart(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/cart/${id}`, {headers})
    }

    // create cart by user
    create_cart(data) {
        return axios.post(`${INSTRUCTOR_API_URL}/create/cart`, data, {headers});
    }

    // update cart by user Id 
    update_cart(id,data) {
        return axios.put(`${INSTRUCTOR_API_URL}/upload/cart/${id}`, data, {headers});
    }

    // delete user by Id
    delete_cart(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/delete/cart/${id}`,{headers});
    }
}
export default new ProductDataService();