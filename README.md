# Cloud workshop

A workshop for creating, deploying and evaluating a simple API to the cloud.

## API specification

The API consists of one resource for creating, updating and listing quoutes. The API is RESTful and JSON-based.

### List quotes

Lists quotes and information needed for paging. 

**URL**: `/api/quotes`
**Method**: `GET`
**Params**: `page` (optional, integer, >= 0)
**Response code**: 200
**Example response**:
```js
{
  "quotes": [ // A page has 20 quotes
    {
      "id": "1",
      "quote": "This is a quote.",
      "author" "The Author"
    }
  ],
  "count": 1 // Total count of quotes in the system
}
```

### Create quote

Adds a new quote.

**URL**: `/api/quotes`
**Method**: `POST`
**Response code**: 201 if successful, otherwise 400
**Example request body**:
```js
{
  "quote": "This is a quote.", // Required, not empty
  "author" "The Author" // Required, empty
}
```
**Example response**:
```js
{
  "id": "1",
  "quote": "This is a quote."
  "author" "The Author"
}
```

### Get quote

Gets a quote by ID.

**URL**: `/api/quotes/{{id}}`
**Method**: `GET`
**Response code**: 200 if present, otherwise 404
**Example response**:
```js
{
  "id": "1",
  "quote": "This is a quote."
  "author" "The Author"
}
```

### Update quote

Updates a quote.

**URL**: `/api/quotes/{{id}}`
**Method**: `PUT`
**Response code**: 200 if successful, 404 if no quote with given id exists, otherwise 400
**Example request body**:
```js
{
  "quote": "This is a quote.", // Required, not empty
  "author" "The Author" // Required, not empty
}
```
**Example response**:
```js
{
  "id": "1",
  "quote": "This is a quote."
  "author" "The Author"
}
```
