# Ecommerce Applications
## Milestone 1: Project Overview
- Authentication: login logout signup
- Product image: All the products
- Orders page: Shows orders for each her
- Payment gateway
## Milestone 2: Login Page
- using react created the login page
- created a components folder in src
- created auth folder for the loginPage and signUpPage

- installed tailwindcss and backend technologies
## Milestone 3:
- created the required files in the backend file 
- installed dotenv
- configured the port to listen to the port 8080
- created a database cluster in mongoDB Atlas and connected the server and the database
- handled error in the utils file
- installed tailwindcss and backend technologies which are mongoose,express,nodemon and cors
- succesfully created the login page for the ecommerce app

## Milestone 4
- created the required folders in the backend file
- created the userModel to add the user data to the database
- added the middleware folder for the middleware
- installed multer in the middleware folder
- defining the usermodel function inside the models
- created the route in the routes file

## Milestone 5
- In the signup page in the components folder the code for the signup page is added
- the signup page takes the datas such as name email password and file upload which takes the input as jpg png and jpeg
- a file validation.js was creates so as to validate the data passed by the user in the signup form
- react router dom is installed and routes are defined for login page and signup page

## Milestone 6
- Generated a JWT token for the user at signup.
- Created a verification link with the token.
- Configured Nodemailer to send the email with the verification link.
- Created an endpoint to verify the token and activate the user.

## Milestone 7
- Created the login and signup logic for the ecommerce application
  - Checking if the user exists
  - if they exist showing the appropriate message

## Milestone 8
- Added the routes
- created the card.jsx in the components folder
- made changes in the homePage.jsx file
- Changed the routes in the app.jsx file


## Milestone 9
- The seller is now able to upload their products
- they are able to insert multiple images
- The error is also handled

## Milestone 10
- Created the schema
- the endpoint was created to write the data into the database using multer and cloudinary

## Milestone 11
- wrote the endpoint to fetch data from the database and send it to the client

## Milestone 12
- Made an endpoint which will send all products with user mail to frontend
- In frontend, a function to get all the data 
- Displayed these data dynamically passing to product card component

## Milestone 13
- Backend: put route is added to update the data added in the card
- Fontend: autofilling is done so as that when the page is loaded with the data filled except images

## Milestone 14
- Backend: Delete route is added to delete a card data
- Frontend: delete button is added to the card and delete logic is added

## Milestone 15
- The Navbar is added to the website with functionality
## Milestone 16
- product detail and image modal is added 

## Milestone 17
- Cart Schema added 
- cart route added

## Milestone 18 
- Get cart data route

## Milestone 19
- added the cart component
- made add to cart functional
## Milestone 20
- added the profile page to the navabar and set up the backend route for fetching the user detail

## Milestone 21
- created the adress form page

## Milestone 22
- created the backend endpoint for the address

## Milestone 23
- created the checkout button from the cart
- address selection option is available and once the address is selected the user is diverted to the order confirmation page

## Milestone 24
- Created the checkout page

## Milestone 25
- added the controller route and the model for the order confirmation page

## Milestone 26
- Added the order route to app.js
- added the getuserorders in controller

## Milestone 27
- created a my-orders page
- sent a get request to my-orders endpoint that we created in previous milestone.
- sent user mail to endpoint to get all the user orders
- Displayed all the user orders
- added my-orders page in navbar for better navigation.

## Milestone 28
- In my-orders page for every order cancel order button is added
- If the order is already canceled this button is not be displayed
- an endpoint is created that will receive the order-id

## Milestone 29 & 30
- Made the payment gateway using Razorpay

## Milestone 31
- Added redux to the platform

## Milestone 32

- In Login page Dispatch method is used to store the mail inside global state
- In all the remaining pages acc the mail stored in global state using useSelector

## Milestone 33
- Downloaded jsonwebtoken package using NPM
- Used sign method to create an JWT token with mail and ID
- Gave maxAge to set expire time
- Added the cookie inside the response that helps to store the cookie inside browser.

## Milestone 34
- Used Jwt in login and any communication between client and the server
- stored jwt in cookie