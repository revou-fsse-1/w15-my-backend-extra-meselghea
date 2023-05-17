# Backend Extra

## Access the REST API

[mesel15.onrender.com](https://mesel15.onrender.com/)
[DockerHub](https://hub.docker.com/repository/docker/meselghea/my-backend-extra/general)

### Enpoints

|                     |                                            |
| :------------------ | :----------------------------------------- |
| GET/                | Get Hello ${username}! with authenticatied |
| POST/sellers        | Create a new seller with authenticatied    |
| POST/products       | Create a new product with authenticatied   |
| PUT/products        | Update detail product with authenticatied  |
| DELETE/products/:id | Delete product with authenticatied         |
| GET/products/?q=cat | Get all products that contains cat         |
| GET/products/:id    | Get product by id                          |
| POST/register       | Create a new user( password hashing)       |
| POST/login          | login user with create token               |
| GET/logout          | logout (clear cookies )                    |

## Documentation

[Swagger](https://mesel15.onrender.com/api)
