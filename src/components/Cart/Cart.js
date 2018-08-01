import React, {Component} from 'react';
// import axios from 'axios';
import './Cart.css';

class Cart extends Component {
    constructor() {
        super();

        this.state = {
            product: [],
            productName: '',
            price: 0,
            productImg: '',
            quantity: 0
        }
    }

    render() {
        return(
            <section>
                <div>
                    Cart

                    <button>Remove</button>
                </div>
                <div>
                    <button>Checkout</button>
                </div>
            </section>
        )
    }

}

export default Cart;