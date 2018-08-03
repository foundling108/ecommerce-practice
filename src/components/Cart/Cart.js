import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// import axios from 'axios';
import './Cart.css';

class Cart extends Component {
    constructor() {
        super();

        this.state = {
            product: []
        }
    }

    componentDidMount() {
        
    }

    render() {
        return(
            <section className="cart-body">
                <div>
                    Cart
                    <button>Remove</button>
                </div>
                <div>
                    <button className="checkout">Checkout</button>
                </div>
                <div>
                <Link to='/products'><button className="back-to-products">View products</button></Link>
                <Link to='/'><button className="exit-button">Exit</button></Link>
                </div>
            </section>
        )
    }

}

export default Cart;