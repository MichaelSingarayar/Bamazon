var inquirer = require("inquirer");
var mysql = require("mysql");
var cliTable = require("cli-table");



var connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'bamazon'

});


connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected as id: ' + connection.threadId);





    showProducts();







});

// shows the database in a cli table
function showProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        var table = new cliTable({
            head: ["Item Number", "Product Name", "Department", "Price", "Stock"],
            colWidths: [13, 35, 30, 13, 13],
        });

        for (var i = 0; i < res.length; i++) {
            table.push(
                [
                    res[i].item_id,
                    res[i].product_name,
                    res[i].department_name,
                    "$ " + res[i].price,
                    res[i].stock_quantity
                ]
            );
        };

        console.log(table.toString());

        buy();


    });
}

function buy() {
    inquirer
        .prompt([{
                type: "input",
                name: "item",
                message: "What is the ID of the product that you would like to buy?",

            },
            {
                type: "input",
                name: "amount",
                message: "How many units of the product would you like to buy?",

            }
        ])
        .then(function (answer) {
            var itemId = answer.item;
            var amount = answer.amount;
           
            connection.query("SELECT * FROM products WHERE item_id=?", itemId, function(err, res) {
                for (var i = 0; i < res.length; i++) {
    
                    if (amount > res[i].stock_quantity) {
    
                        console.log("===================================================");
                        console.log("Insufficient quantity!");
                        console.log("===================================================");
                        showProducts();
    
                    } else {
                        //list item information for user for confirm prompt
                        console.log("==============================");
                        console.log("We can fulfull your order.");
                        console.log("==============================");
                        console.log("You've selected:");
                        console.log("----------------");
                        console.log("Item: " + res[i].product_name);
                        console.log("Department: " + res[i].department_name);
                        console.log("Price: $" + res[i].price);
                        console.log("Quantity: " + amount);
                        console.log("----------------");
                        console.log("Total: $" + res[i].price * amount);
                        console.log("===============================");
    
                        var newStock = (res[i].stock_quantity - amount);
                        
                        //console.log(newStock);
                        confirmPrompt(newStock, itemId);
                    }
                }
            });







        });


    

}

function confirmPrompt(newStock, itemId) {

    inquirer.prompt([{

        type: "confirm",
        name: "confirmPurchase",
        message: "Are you sure you would like to purchase this item and quantity?",
        default: true

    }]).then(function(userConfirm) {
        if (userConfirm.confirmPurchase === true) {

            //if user confirms purchase, update mysql database with new stock quantity by subtracting user quantity purchased.

            connection.query("UPDATE products SET ? WHERE ?", [{
                stock_quantity: newStock
            }, {
                item_id: itemId
            }], function(err, res) {});

            console.log("=================================");
            console.log("Transaction completed. Thank you.");
            console.log("=================================");
            showProducts();;
        } else {
            console.log("=================================");
            console.log("No worries. Maybe next time!");
            console.log("=================================");
            showProducts();
        }
    });
    
}
