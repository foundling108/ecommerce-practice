import axios from 'axios';

const initialState = {
    products: [],
    cart: [],
    total: 0
};

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CHECKOUT = "CHECKOUT"

export default function ( state=initialState, action ) {
    let { payload } = action;
    switch( action.type ) {
        case GET_PRODUCTS + '_FULFILLED':
            return Object.assign( {}, state, { products: payload } );

        case GET_PRODUCTS + '_FAILED':
            return Object.assign( {}, state, { products: [] } );
            
        case ADD_TO_CART + '_FULFILLED':
            return Object.assign( {}, state, { cart: payload.cart, total: payload.total } );

        case REMOVE_FROM_CART + '_FULFILLED':
            return Object.assign( {}, state, { cart: payload.cart, total: payload.total } );

        case CHECKOUT + '_FULFILLED':
            return Object.assign( {}, state, { cart: payload.cart, total: payload.total } );

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

export function addToCart( id ) {
    return {
        type: ADD_TO_CART,
        payload: axios.post( `/api/add/?id=${id}` ).then( response => response.data )
    }
}

export function removeFromCart( id ) {
    return {
        type: REMOVE_FROM_CART,
        payload: axios.delete( `/api/remove/?id=${id}` ).then( response => response.data )
    }
}

export function checkout() {
    return {
        type: CHECKOUT,
        payload: axios.post( '/api/checkout' ).then( response => response.data )
    }
}