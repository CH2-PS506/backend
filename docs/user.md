# user API spec

## Register User API

endpoint : POST /api/users

request Body :

```json
{
  "first_name": "fauzan",
  "last_name": "romi",
  "email": "fauzanroj@gmail.com",
  "password": "ujicoba"
}
```

response body success :

```json
{
  "status": "success",
  "message": "User registered successfully",
  "user": {
    "id": 123,
    "first_name": "fauzan",
    "last_name": "romi",
    "email": "fauzanroj@gmail.com"
  }
}
```

responses body error:

```json
{
  "status": "error",
  "message": "Invalid request data",
  "errors": [
    {
      "field": "email",
      "message": "Email address is already in use"
    },
    {
      "field": "password",
      "message": "Password must be at least 6 characters"
    }
  ]
}
```
## login user API

Endpoint : POST /api/users/login

request Body :

```json
{
  "gmail": "fauzanroj@gmail.com",
  "password": "ujicoba"
}
```

response body success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

response body error :

```json
{
  "error": "Email and password wrong"
}
```
## update user API

Endpoint : POST/api/users/current

request body :

```json
{
  "paswword-old": "password old",
  "new_password": "new password"
}
```

respone body success:

```json
{
  "data": {
    "new password": "uji coba"
  }
}
```
response body error :

```json
{
  "errors": "password length max 30"
}
```

## get user API

Endpoint : GET /api/users/current

headers :
- authorization : token

response body success:

```json
{
  "data": {
    "fullname": "fauzan romi juliansyah",
    "email": "fauzan@gmail.com"
  }
}
```

response body error:

```json
{
  "errors": "unauthorized"
}
```
## logout user API

headears :
- authorization : token

Endpoint : DELETE /api/users/logout

response body success:

```json
{
  "data": "OK"
}
```
response body error:

```json
{
  "errors": "unauthorized"
}
```