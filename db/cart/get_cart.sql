SELECT *
FROM cart
inner JOIN products 
ON cart.product_id = products.id