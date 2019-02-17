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

# Running the example API and frontend

To run the example API start a terminal and navigate to this project.
Then run:

```bash
docker-compose up
```

This will start the api at http://localhost:8080 and the frontend at http://localhost:3000.
If you make changes to the project you may need to rebuild the project

```bash
# Build the images
docker-compose build

# Or force a rebuild when starting them
docker compose up --build
```

before starting it again.

It is possible to use the frontend to test other implementations of the API:

```bash
docker run -it -p 3000:80 -e API_URL=http://myapi.org:8080 cloud-workshop_frontend 
```

When developing a new frontend, you may use the upload feature in the frontend to get some data into your API.
Two files with data, `example-quotes-3.json` and `example-quotes-100.json` are provided in this repository.

## Local development

```bash
docker-compose -f docker-compose-dev.yaml up
```

### Frontend

In quotes-frontend/Dockerfile replace API_URL:8080 with your backend url and port.

```
ENV REACT_APP_API_URL="http://API_URL:8080"
```