module.exports = {
    getProducts: (req, res) => {
        const dbInstance = req.app.get('db')
        const { product_name, price, product_img } = req.body;

        dbInstance.products.get_products([product_name, price, product_img])
        .then( product => res.status( 200 ).send( product ) )
        .catch( err => {
            res.status( 500 ).send({ errorMessage: "Cannot get products" })
            console.log(err)
        } )
    }
}