import React, {Component} from 'react';
// import axios from 'axios';
import './Products.css';

class Products extends Component {
    constructor() {
        super();

        this.state = {
            products: [],
            productName: '',
            price: 0,
            productImg: ''
        }
    }

    render() {
        return(
            <div>
                Products
            </div>
        )
    }

}

export default Products;