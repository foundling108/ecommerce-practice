INSERT INTO cart (
    cartid,
    quantity,
    productid
)
values ( $1, $1, $1 );


 
SELECT  c.cartid,
        c.quantity,
        p.id,
        p.product_name,
        p.price,
        p.product_image
FROM cart c, products p
WHERE c.productid = p.id;
