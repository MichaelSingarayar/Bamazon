# Bamazon
Bamazon

# Overview
Bamazon is an Amazon-like storefront which utilizes MySQL and node.js. The app will take in orders from customers and deplete stock from the store's inventory.

# Bamazon Customer View
Running ' node bamazonCustomer.js` will first display all of the items available for sale. This will include the ids, names, departments, prices of products for sale and the stock quantity.

![gify1](https://user-images.githubusercontent.com/43361200/51454457-fbe87880-1d01-11e9-9345-e0fc4409278a.gif)

- The app will then prompt users with two messages.
- The first will ask for the ID of the product that they would like to buy.
- The second message will ask how many units of the product they would like to buy.


![gify3](https://user-images.githubusercontent.com/43361200/51454456-fb4fe200-1d01-11e9-9245-25d18a74db05.gif)



- Once the customer has placed the order, the application will check if the store has sufficient product items to meet the customer's request.

- If there is enough stock_quantitiy to fulfill the order the app will show the user the name, department, price, quantity, and toatal amount for the purchase.







![gify4](https://user-images.githubusercontent.com/43361200/51454455-fb4fe200-1d01-11e9-9935-b61dcb2d13cf.gif)






- If not, the app will log the phrase Insufficient quantity!, and prevent the order from going through.

![gifyin](https://user-images.githubusercontent.com/43361200/51454583-b11b3080-1d02-11e9-99d2-d1f168488b1d.gif)








- The app will then promt the user "Are you sure you would like to purchase this item and quantity?"
- If the user selects yes the app will log the phrase "Transaction completed. Thank you."
- The database will be updated with the subtraction of the quanitity of the product chosen by the user.





![gify5](https://user-images.githubusercontent.com/43361200/51454454-fb4fe200-1d01-11e9-9513-2ebac47c212b.gif)



-If the user choses no, the app will log the phrase "No worries. Maybe next time!"

![gifynexttime](https://user-images.githubusercontent.com/43361200/51454582-b11b3080-1d02-11e9-9b08-8e8b22726a5b.gif)









# Technology Used

- Node.js
- NPM packages
  - inquirer 
  - mysql 
  - cliTable

# Author

Michael Singarayar
