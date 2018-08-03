module.exports = {
    add: (req, res) => {
        const dbInstance = req.app.get('db');
        const { cartid, quantity, id, product_name, price, product_image  } = req.body;
       
        dbInstance.cart.add_product([ cartid, quantity, id, product_name, price, product_image  ])
        .then( (products) => {
            res.status(200).send( products)} )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not add item"});
            console.log(err)
        } );
    },

    remove: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.cart.delete_product([id])
        .then( products => res.status(200).send(products) )
        .catch( err => console.log(err) )
    },

    deleteCart: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.cart.delete_whole_cart([id])
        .then( cart => res.status(200).send(cart) )
        .catch( err => console.log(err) )
    },

    changeQuantity: (req, res) => {
        const dbInstance = req.app.get('db');
    },

    checkout: (req, res) => {
        const dbInstance = req.app.get('db');
    }
    
}