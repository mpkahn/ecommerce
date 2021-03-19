#  E-Commerce Back End


## Description

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. This code functions as the back end for an ecommerce site and uses sequelize to manipulate and interact with a MYSQL database with the store's products and information.



## Installation

* Navigate to https://github.com/mpkahn/ecommerce and clone repository to local machine.
* Once on local machine:
* Install npm (`npm i`). 
* Install` npm sequelize`
* Install `npm mysql`
* Install npm dotenv
* Ensure correct information in .env file
* Either initialize database in mysql workbench ~or~ utilize ``mysql -u root -p`` (followed by your password)
* Seed databse with ``npm run seed`` or ``node seed``
* Once NPM is installed, run "npm start" to launch application

## Usage 

See video demo: https://drive.google.com/file/d/1blo3yuL1axHVFeGvVC5iOV3mpuany9m9/view

npm start will initiate server

* Utilize insomnia core to get data by product/category/tag
* Utilize insomnia core to post new data 
* Utilize insomnia core to update or delete data from db


## Credits

* node.js and its documentation on file systems https://nodejs.org/api/fs.html & https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
npm js, 
* Sequelize
* MYSQL https://dev.mysql.com/doc/refman/8.0/en/keywords.html
* Insomnia core
* Screencastify


## License

MIT License

Copyright (c) [2021] [Michael Kahn]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

