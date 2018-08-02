module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')
        const { product_name, price, product_img } = req.body;

        db.products.get_products([product_name, price, product_img])
        .then( product => res.status( 200 ).send( product ) )
        .catch( err => {
            res.status( 500 ).send({ errorMessage: "Cannot get products" })
            console.log(err)
        } )
    }
}