import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Products.css';

class Products extends Component {
    constructor() {
        super();

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('/api/product').then(res => {
            this.setState({ products: res.data })
        })
    }

    render() {
        return(
            <section>
            <div className="products-body">
                Products
            </div>
            <div>
                <Link to='/'><button className="exit-button">Exit</button></Link>
            </div>
            </section>
        )
    }

}

export default Products;