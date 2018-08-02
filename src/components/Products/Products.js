import React, {Component} from 'react';
import './Products.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts } from '../../dux/reducer';

// import axios from 'axios';

class Products extends Component {
    constructor() {
        super();

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        const { getProducts } = this.props;
        getProducts();
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

function mapStateToProps(state) {
    return {
        state
    };
}

export default connect( mapStateToProps, { getProducts })(Products);