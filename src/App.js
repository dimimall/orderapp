import React, { Component } from "react";
import { Routes, Route, Link} from "react-router-dom"
import ProductList from '../src/components/product-list.component'
import ProductListPublic from '../src/components/product-list-public.component'
import AddProduct from '../src/components/add-product.component'
import LoginUser from '../src/components/login-user.components'
import UserList from '../src/components/user-list.components'
import AddOrUpdate from '../src/components/addorupdate-users.components'
import UserListPublic from "../src/components/user-list-public.components"
import ShowProduct from "../src/components/show-product.components"
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <ul>
          <li>
            <Link to="/">Users List</Link>
          </li>
        </ul>
      <div className="main">
        {/* Define all the routes */}
        <Routes>
          <Route path="/:params" element={<AddProduct />}></Route>
          <Route path="/product" element={<ProductList />}></Route>
          <Route path="/user_list" element={<UserList />}></Route>
          <Route path="/addorupdate/:users" element={<AddOrUpdate />}> </Route>
          <Route path="/login/:users" element={<LoginUser />}></Route>
          <Route path="/product_public" element={<ProductListPublic />}></Route>
          <Route path="/" element={<UserListPublic />}></Route>
          <Route path="/showproduct/:params" element={<ShowProduct />}></Route>
        </Routes>
      </div>
    </div>
      )
  }
}

export default App;
