# Financial Reports

## GET financials reports

Endpoint GET /api/financials

Headers :
- Authorization : token

Request body :

```json
{
  "UserID": "number",
  "period": "date",
  "year": "2021"
}
```

responses body success :
```json
{
  "data": {
    "totalIncome": 15000,
    "totalExpenses": 6000,
    "closingBalance": 9000
  }
}
```

responses body failed :
```json
{
  "status": "error",
  "message": "Invalid request parameters. Please check the provided data."
}
```