# Bamazon
Bamazon

# Overview
Bamazon is an Amazon-like storefront which utilizes MySQL and node.js. The app will take in orders from customers and deplete stock from the store's inventory.

# Bamazon Customer View
Running ' node bamazonCustomer.js` will first display all of the items available for sale. This will include the ids, names, prices of products for sale and the stock quantity.

# Gif Images 1



- The app will then prompt users with two messages.
- The first will ask for the ID of the product that they would like to buy.
- The second message will ask how many units of the product they would like to buy.
- Once the customer has placed the order, the application will check if the store has sufficient product items to meet the customer's request.

- If there is enough stock_quantitiy to fulfill the order the app will show the user the name, department, price, quantity, and toatal amount for the purchase.

# Gif Images 3






- If not, the app will log the phrase Insufficient quantity!, and prevent the order from going through.

# Gif Images 4




- The app will then promt the user "Are you sure you would like to purchase this item and quantity?"
- If the user selects yes the app will log the phrase "Transaction completed. Thank you."
- The database will be updated with the subtraction of the quanitity of the product chosen by the user.

# Gif Images 5


-If the user choses no, the app will log the phrase "No worries. Maybe next time!"

# Gif Images 6




# Technology Used

- Node.js
- NPM packages
  - inquirer 
  - mysql 
  - cliTable

# Author

Michael Singarayar
