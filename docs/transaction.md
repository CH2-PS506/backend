# financial management spec

## add transaction

Endpoint : POST /api/transaction

Headers :
- authorization : token

request body :

```json
{
  "data":{
    "Userid": "134",
    "id": "789",
    "date": "1",
    "type": "food",
    "amount": "5000"
      
  }
}
```

response body success:

```json
{
  "status": "success",
  "message": "Transaction added successfully",
  "transaction": {
    "id": 12345,
    "userId": 789,
    "date": "2023-10-15",
    "type": "Stock Purchase",
    "amount": 5000,
    "price": 50.25
    }
}
```

responses body error :

```json
{
  "status": "error",
  "message": "Invalid request data",
  "errors": [
    {
      "field": "amount",
      "message": "Amount must be a positive number"
    },
    {
      "field": "date",
      "message": "Invalid date format. Use YYYY-MM-DD"
    }
  ]
}
```
## Update transaction

endpoint : PUT /api/transaction
Headers :
- authorization : token

request body :
```json
{
  "date": "2023-10-20",
  "type": "Stock Sale",
  "amount": 3000,
  "price": 60.75
}
```
responses body success :
```json
    {
  "status": "success",
  "message": "Transaction updated successfully",
  "transaction": {
    "id": 12345,
    "userId": 789,
    "date": "2023-10-15",
    "type": "Stock Sale",
    "amount": 3000,
    "price": 60.75
  }
}
```

responses body error :

```json
{
  "status": "error",
  "message": "Invalid request data",
  "errors": [
    {
      "field": "amount",
      "message": "Amount must be a positive number"
    },
    {
      "field": "date",
      "message": "Invalid date format. Use YYYY-MM-DD"
    }
  ]
}
```
## delete transaction

endpoint : DELETE /api/transaction

Headers :
- authorization : token

request body:

```json
{
  "data": {
    "id": "12345",
    "userid": "adfadfa134134"
  }
}
```
responses body success:

```json
{
    "status":"success"
}
```

responses body error :

```json
{
    "status":"error",
    "message":"not found transaction"
}
```