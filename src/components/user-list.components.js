import { Component } from "react";
import { Routes, Route, Link} from "react-router-dom"
import ProductDataService from "../services/product.service";


// user list component from users get api
class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            message: null
        }
        this.refreshUsers= this.refreshUsers.bind(this)
        //update user only admin
        this.updateUserClicked = this.updateUserClicked.bind(this)
        // delete user only admin
        this.deleteUserClicked = this.deleteUserClicked.bind(this)
    }

    componentDidMount(){
        this.refreshUsers()
    }

    // get all users function
    refreshUsers() {
        ProductDataService.getAllUsers()
        .then(
            response => {
                console.log(response.data);
                this.setState({ users: response.data })
            }
        )
    }

    // function delete user by Id from delete api 
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

    // create html table with users
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
                                {/* Link to add user page */}
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