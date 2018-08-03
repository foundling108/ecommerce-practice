import axios from 'axios';

const initialState = {
    products: [],
    cart: [],
    total: 0
};

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CHECKOUT = "CHECKOUT";

export default function ( state=initialState, action ) {
    switch( action.type ) {
        case GET_PRODUCTS + '_FULFILLED':
            return Object.assign( {}, state, { products: action.payload } );

        case GET_PRODUCTS + '_FAILED':
            return Object.assign( {}, state, { products: [] } );
            
        case ADD_TO_CART:
            return Object.assign( {}, state, { cart: action.payload } );

        case REMOVE_FROM_CART:
            return Object.assign( {}, state, { cart: action.payload } );

        case CHECKOUT:
            return Object.assign( {}, state, { cart: action.payload } );

        default: 
            return state;
    }
}

export function getProducts() {
    return {
        type: GET_PRODUCTS,
        payload: axios.get('/api/get-products').then( response => response.data )
    }
}

export function addToCart( products ) {
    return {
        type: ADD_TO_CART,
        payload: products
    }
}

export function removeFromCart( products ) {
    return {
        type: REMOVE_FROM_CART,
        payload: products
    }
}

export function checkout( cart ) {
    return {
        type: CHECKOUT,
        payload: cart
    }
}