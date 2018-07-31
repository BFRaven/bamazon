var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "root",

    database: "bamazon"
});

connection.connect(function (err) {
    console.log("ITEMS AVAILABLE FOR SALE AT BAMAZON!" + "\n");

    start();
}
);

function start() {
    connection.query(
        "SELECT * FROM products1",
        function (err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log("\n" + res[i].id + " | " + "Product Name: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price:  $" + res[i].price + " | " + "In Stock: " + res[i].stock_quantity);

            }
            if (err) throw err;

            console.log("-----------------------------------------------------------------------------------------------")







            inquirer.prompt([
                {
                    name: "id",
                    message: "What is the ID of the products you would like to purchase?"

                },
                {
                    name: "stock_quantity",
                    message: "How many units of this product would you like to buy?"
                }
            ]).then(function (ans) {
                var id = ans.id;
                var qty = ans.stock_quantity;
                var query = connection.query("SELECT * FROM products1 WHERE id = ?", [id], function (err, res) {
                    if (err) {
                        console.log(err);
                    }

                    var inStock = res[0].stock_quantity;
                    var price = res[0].price;

                    if (qty > inStock) {
                        console.log("INSUFFICIENT QUANTITY");
                        shopMore();
                    } else {

                        inStock = (inStock - qty);

                        var query = connection.query("UPDATE products1 SET stock_quantity = ? WHERE id = ?", [inStock, id],
                            function (err, res) {
                                if (err) {
                                    console.log(err);
                                }

                                var total = (qty * price);

                                console.log("-----------------------------------------------------------------------------------------------")

                                console.log("ORDER HAS BEEN PLACED FOR ID # " + id + "  " + "For " + qty + "  " + "Items." + "  " +"Your Total cost is: $" + total);

                                console.log("-----------------------------------------------------------------------------------------------")

                                shopMore();
                            });
                    };
                });
            })

        });
}

function shopMore() {
    inquirer.prompt([
        {
            name: "command",
            type: "list",
            message: "Would you like to shop for more items?",
            choices: ["YES", "NO"]
        }
    ]).then(function (ans) {
        var comm = ans.command;
        console.log(comm);

        if(comm === "YES") {


            start();
        } else {

            console.log("-----------------------------------------------------------------------------------------------")

            console.log("THANKS FOR CHOOSING BAMAZON, HOPE TO SEE YOU SOON! \n");
            connection.end();
        }
    })
}