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
                    res[i].stock_quantity]
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
            //console.log(itemId);
            //console.log(amount);
            

            //connection.query("SELECT * FROM products Where ?")
                




            
            
        });
    
    
        connection.end();

}