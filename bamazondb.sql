DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE products;

CREATE TABLE products (

id INT NOT NULL PRIMARY KEY,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price FLOAT (10, 4) NULL,
stock_quantity INT NULL


);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lamp", "Lighting", 50.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Computer", "Electronics", 799.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Canvas", "Home Decor", 79.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gloves", "Women", 7.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wine", "Groceries", 89.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Scooter", "Toys", 199.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paint", "Home Improvement", 20.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vase", "Home Decor", 59.99, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cologne", "Mens", 299.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Microwave", "Kitchen", 250.99, 12);




SELECT*FROM products;