import React, {Component} from 'react';
import './Products.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  addToCart } from '../../dux/reducer';

import axios from 'axios';

class Products extends Component {
    constructor() {
        super();

        this.state = {
            products: []
        }

        this.handleCart = this.handleCart.bind(this);
    }

    componentDidMount() {
        axios.get('/api/get-products').then( res => {
            this.setState({ products: res.data })
        } )

    }

    handleCart = () => {
        axios.post( `/api/add` ).then( res => {
            this.props.addToCart( res.data )
        } )
    }

    render() {
        let productDisplay = this.state.products.map( ( el, i ) => (
            <div className="product-boxes"
                    key={i}>
                <img src={ el.product_image } alt="robot"/>
                <p>
                    { el.product_name }
                </p>
                <p>
                    { el.price }
                </p>
                <button className="add-button" onClick={ this.handleCart } >Add to cart</button>
            </div>
        ) )

        return(
            <section>
                <div className="products-body">
                    { productDisplay }
                </div>
                <div>
                    <Link to='/cart'><button className='view-cart'>View cart</button></Link>
                </div>
                <div>
                    <Link to='/'><button className="exit-button">Exit</button></Link>
                </div>
            </section>
        )
    }

}

function mapStateToProps(state) {
    return {
        cart: state
    };
}

export default connect( mapStateToProps, {  addToCart })(Products);