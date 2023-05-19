# Backend Extra

## Access the REST API

- [mesel15.onrender.com](https://mesel15.onrender.com/)
- [DockerHub](https://hub.docker.com/repository/docker/meselghea/my-backend-extra)

### Enpoints

|                     |                                           |
| :------------------ | :---------------------------------------- |
| GET/                | Get Hello ${username}! with authenticated |
| POST/sellers        | Create a new seller with authenticated    |
| POST/products       | Create a new product with authenticated   |
| PUT/products        | Update detail product with authenticated  |
| DELETE/products/:id | Delete product with authenticated         |
| GET/products/?q=cat | Get all products that contains cat        |
| GET/products/:id    | Get product by id                         |
| POST/register       | Create a new user( password hashing)      |
| POST/login          | login user with create token              |
| GET/logout          | logout (clear cookies )                   |

## Documentation

[Swagger](https://mesel15.onrender.com/api)
