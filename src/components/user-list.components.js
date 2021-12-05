import { Component } from "react";
import { Routes, Route, Link} from "react-router-dom"
import ProductDataService from "../services/product.service";


class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            message: null
        }
        this.refreshUsers= this.refreshUsers.bind(this)
        this.updateUserClicked = this.updateUserClicked.bind(this)
        this.deleteUserClicked = this.deleteUserClicked.bind(this)
    }

    componentDidMount(){
        this.refreshUsers()
    }

    refreshUsers() {
        ProductDataService.getAllUsers()
        .then(
            response => {
                console.log(response.data);
                this.setState({ users: response.data })
            }
        )
    }

    deleteUserClicked(id) {
        ProductDataService.delete_user(id)
            .then(
                response => {
                    console.log(response.status)
                    this.setState({ message: `Delete of product ${id} Successful` })
                    this.refreshUsers()
                }
            )
    }

    updateUserClicked(id) {
        console.log('update ' + id)
    }

    render() {
        return (
            <div className="container">
                <h3>All Users</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>User Name</th>
                                <th>User role</th>
                                <th>Login</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                               this.state.users.map(
                                   user => 
                                   <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.role}</td>
                                    <td><Link to={`/login/${user.id}`} className="btn btn-primary">Login</Link></td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteUserClicked(user.id)}>Delete</button></td>
                                    <td><Link to={`/addorupdate/${user.id}`} className="btn btn-primary">Update</Link></td>
                                   </tr>
                               )
                           }
                        </tbody>
                        <tfoot>
                            <tr> 
                                <td><Link to={`/addorupdate/-1`} className="btn btn-primary">Add User</Link></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}
export default UserList