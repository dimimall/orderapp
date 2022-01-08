import axios from 'axios'

const ORDER_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `/api`

const 
    headers= {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }


class ProductDataService {

    getAll(){
        return axios.get(`${INSTRUCTOR_API_URL}/products`);
    }

    create(data) {
        return axios.post(`${INSTRUCTOR_API_URL}/create`, data, {headers});
    }

    update(id,data) {
        return axios.put(`${INSTRUCTOR_API_URL}/upload/${id}`, data, {headers});
    }

    delete(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/delete/${id}`,{headers});
    }

    retrive(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/products/${id}`, {headers})
    }

    redirect() {
        return axios.get(`${INSTRUCTOR_API_URL}/add/redirect`, {headers})
    }

    getAllUsers(){
        return axios.get(`${INSTRUCTOR_API_URL}/users`);
    }

    retrive_user(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/users/${id}`, {headers})
    }

    create_user(data) {
        return axios.post(`${INSTRUCTOR_API_URL}/create/user`, data, {headers});
    }

    update_user(id,data) {
        return axios.put(`${INSTRUCTOR_API_URL}/upload/user/${id}`, data, {headers});
    }

    delete_user(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/delete/user/${id}`,{headers});
    }

    retrive_cart(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/cart/${id}`, {headers})
    }

    create_cart(data) {
        return axios.post(`${INSTRUCTOR_API_URL}/create/cart`, data, {headers});
    }

    update_cart(id,data) {
        return axios.put(`${INSTRUCTOR_API_URL}/upload/cart/${id}`, data, {headers});
    }

    delete_cart(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/delete/cart/${id}`,{headers});
    }
}
export default new ProductDataService();