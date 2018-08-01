import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './Cart.css';

class Cart extends Component {
    constructor() {
        super();

        this.state = {
            productName: '',
            price: 0,
            productImg: '',
            quantity: 0
        }
    }

    render() {
        return(
            <section className="cart-body">
                <div>
                    Cart
                    <button>Remove</button>
                </div>
                <div>
                    <button>Checkout</button>
                </div>
                <div>
                <Link to='/'><button className="exit-button">Exit</button></Link>
                </div>
            </section>
        )
    }

}

export default Cart;