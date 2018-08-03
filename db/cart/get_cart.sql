SELECT *
FROM cart
inner JOIN products 
ON cart.productid = products.id
WHERE cartid = $1;