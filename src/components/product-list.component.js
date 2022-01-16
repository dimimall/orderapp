import { Component } from "react";
import { Routes, Route, Link} from "react-router-dom"
import ProductDataService from "../services/product.service";


// products list component only admin can see this page.
// admin can add update and delete product by Id
class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            message: null
        }
        this.refreshProducts = this.refreshProducts.bind(this)
        // delete product
        this.deleteProductClicked = this.deleteProductClicked.bind(this)
        // update product
        this.updateProductClicked = this.updateProductClicked.bind(this)
    }

    componentDidMount(){
        this.refreshProducts()
    }

    // fuction get all product from get product api
    refreshProducts() {
        ProductDataService.getAll()
        .then(
            response => {
                console.log(response.data);
                this.setState({ products: response.data })
            }
        )
    }

    // function delete product by Id via delete product api 
    deleteProductClicked(id) {
        ProductDataService.delete(id)
            .then(
                response => {
                    console.log(response.status)
                    this.setState({ message: `Delete of product ${id} Successful` })
                    this.refreshProducts()
                }
            )
    }

    updateProductClicked(id) {
        console.log('update ' + id)
    }

    // return all products in Html table 
    render() {
        return (
            <div className="container">
                <h3>All Products</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Product Name</th>
                                <th>Product price</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                               this.state.products.map(
                                   product => 
                                   <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.itemName}</td>
                                    <td>{product.productPrice}</td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteProductClicked(product.id)}>Delete</button></td>
                                    <td><Link to={`/${product.id}`} className="btn btn-primary">Update</Link></td>
                                   </tr>
                               )
                           }
                        </tbody>
                        <tfoot>
                            <tr> 
                                {/* add product button Link and go to users list Link button */}
                                <td><Link to={`/-1`} className="btn btn-primary">Add Product</Link></td>
                                <td><Link to={`/user_list`} className="btn btn-primary">Go To Users</Link></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}
export default ProductList