DELETE FROM cart
WHERE productid = $1;
SELECT * FROM cart; 