Static Files: http://localhost:3001/images

POST - CREATE - REGISTER - USER: http://localhost:3001/users/register

Response: {
message: 'User created with sucess!',
error: null
}

POST - FIND - LOGIN - USER: http://localhost:3001/users/login

Response: {
token,
user, // without password
error: null
}

GET - FIND - USER: http://localhost:3001/users/profile

Response: {
user, // without password, id and role (???)
}

PATCH - UPDATE - USER: http://localhost:3001/users/profile

Response: {
message: 'User update with sucess!',
error: null
}

PATCH - UPDATE - USER: http://localhost:3001/users/token

Response: {}

GET - LIST - PRODUCTS: http://localhost:3001/products

Response: {
products,
}
