var mysql = require("mysql");
var inquirer = require("inquirer");

// SETTING GLOBAL FUNCTIONS
 function viewProducts() {
    connection.query(
        "SELECT * FROM products1",
        function (err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log("\n" + res[i].id + " | " + "Product Name: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price:  $" + res[i].price + " | " + "In Stock: " + res[i].stock_quantity);

            }
            if (err) throw err;

            console.log("-----------------------------------------------------------------------------------------------");

        }

        )};


// var lowInventory = lowInventory();
// var addInventory = addInventory();
// var addNew = addNew();

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "root",

    database: "bamazon"
});

connection.connect(function (err) {
    console.log("WELCOME TO THE BAMAZON MANAGER ZONE!")

    start();
});

function start() {
    inquirer.prompt([
        {
            name: "command",
            type: "list",
            message: "What would you like to manage today?",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
        }
    ]).then(function (ans) {
       var comm = ans.command;
       console.log(comm);

       if(comm === "View Products for Sale") {
           viewProducts();
       }
    })
}