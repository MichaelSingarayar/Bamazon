# Bamazon
Bamazon

# Overview
Bamazon is an Amazon-like storefront which utilizes MySQL and node.js. The app will take in orders from customers and deplete stock from the store's inventory.

# Bamazon Customer View
Running ' node bamazonCustomer.js` will first display all of the items available for sale. This will include the ids, names, departments, prices of products for sale and the stock quantity.

![gify1](https://user-images.githubusercontent.com/43361200/51453971-a01cf000-1cff-11e9-90fe-1cfbfe8e1e7a.gif)



- The app will then prompt users with two messages.
- The first will ask for the ID of the product that they would like to buy.
- The second message will ask how many units of the product they would like to buy.

![gify2](https://user-images.githubusercontent.com/43361200/51453974-a3b07700-1cff-11e9-8744-027bf7b4515e.gif)

- Once the customer has placed the order, the application will check if the store has sufficient product items to meet the customer's request.

- If there is enough stock_quantitiy to fulfill the order the app will show the user the name, department, price, quantity, and toatal amount for the purchase.







![gif3](https://user-images.githubusercontent.com/43361200/51453992-b6c34700-1cff-11e9-830d-f56ddf57a10d.gif)






- If not, the app will log the phrase Insufficient quantity!, and prevent the order from going through.



![gify4](https://user-images.githubusercontent.com/43361200/51453978-ab701b80-1cff-11e9-9d8d-2c97b5cc2b56.gif)



- The app will then promt the user "Are you sure you would like to purchase this item and quantity?"
- If the user selects yes the app will log the phrase "Transaction completed. Thank you."
- The database will be updated with the subtraction of the quanitity of the product chosen by the user.



![gify5](https://user-images.githubusercontent.com/43361200/51453995-b88d0a80-1cff-11e9-800c-ec597e8c1128.gif)


-If the user choses no, the app will log the phrase "No worries. Maybe next time!"

![gify6](https://user-images.githubusercontent.com/43361200/51453996-ba56ce00-1cff-11e9-8d90-079e657477f1.gif)






# Technology Used

- Node.js
- NPM packages
  - inquirer 
  - mysql 
  - cliTable

# Author

Michael Singarayar
