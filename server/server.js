const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

// Controllers
const products_controller = require( './controllers/products_controller' );
const cart_controller = require( './controllers/cart_controller' );

const app = express();

app.use( bodyParser.json() );

massive(process.env.CONNECTION_STRING)
.then( dbInstance => {
    app.set('db', dbInstance)
    console.log("db connected")
}).catch( err => console.log("Massive", err) );

// Products
app.get( '/api/get-products', products_controller.getProducts );

// Cart
app.post( '/api/add', cart_controller.add );
app.post( '/api/checkout', cart_controller.checkout );
app.delete( 'api/remove', cart_controller.remove );

const port =  process.env.PORT || 4000;
app.listen( port, () => { console.log(`Listening on port ${port}.`); } )