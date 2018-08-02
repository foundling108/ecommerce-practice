UPDATE cart
SET quantity = $2
WHERE id = $1;
SELECT *
FROM cart
JOIN products 
ON cart.product_id = products.id