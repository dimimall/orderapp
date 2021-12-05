import { Component } from "react";
import { Routes, Route, Link} from "react-router-dom"
import ProductDataService from "../services/product.service";


class UserListPublic extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            message: null
        }
        this.refreshUsers= this.refreshUsers.bind(this)
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
                                   </tr>
                               )
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default UserListPublic