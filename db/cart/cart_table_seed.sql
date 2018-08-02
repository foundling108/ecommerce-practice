CREATE TABLE cart (
    cartID INT NOT NULL,
    quantity INT NOT NUll,
    productID INT,
    PRIMARY KEY ( cartID ),
    FOREIGN KEY ( productID ) REFERENCES products(id)
);