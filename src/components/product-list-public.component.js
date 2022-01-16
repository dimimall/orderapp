import { Component } from "react";
import { Routes, Route, Link} from "react-router-dom"
import ProductDataService from "../services/product.service";


// product list vivsible in all users
// users can choose and see details of each product
class ProductListPublic extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            message: null
        }
        this.refreshProducts = this.refreshProducts.bind(this)
    }

    componentDidMount(){
        this.refreshProducts()
    }

    // get all products via get products api
    refreshProducts() {
        ProductDataService.getAll()
        .then(
            response => {
                console.log(response.data);
                this.setState({ products: response.data })
            }
        )
    }


    // return all products and Html table to display these
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
                                <th>Show Product</th>
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
                                    {/* show each product */}
                                    <td><Link to={`/showproduct/${product.id}`} className="btn btn-primary">Show Product</Link></td>
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
export default ProductListPublic