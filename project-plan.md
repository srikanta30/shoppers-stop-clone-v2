### Pages:

* Home Page - Signup & Login.
* Category Page.
* Single Product Page.
* Cart Page.
* Wishlist Page.
* Checkout Page.
* Payment Page.
* Order Processing.
* Order Successful.

### Database Structure:

* Users - full_name, email, mobile, password, gender, address, orders[{productid}], wishlist[{productid}].

* Products - product_name, description, price, discount, brand_name, rating, size1, size2, color, image1, image2, image3, image4.

* Cart - user_id, product_id, quantity.

### Folder Stucture:

* src - main folder for the whole project.

* src/configs - database configuration and key file for the password.

* src/controllers - this will have all the controllers & crud controller required for the project.

* src/models - this will have all the schemas and models.

* src/server.js - This is our main file for the server. This will be managed by me. If you want to make any changes, please inform me first.

* src/public - here we will store the images, css & js files required for the ejs files to work.

* src/views - this is where we will have our partials and all the ejs files.

* front_end_files - front end files required for the project.

* package.json, package-lock.json, .gitignore, LICENSE, README.md - Other files that are requried for the project.