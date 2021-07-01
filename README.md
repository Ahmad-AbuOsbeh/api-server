# api-server

**Author: Ahmad Abu Osbeh**
<br>

- tests report
- back-end

**Setup**
<br>

- .env requirements
- PORT - 3003
- Running the app
- npm start
- Endpoint:

1- food

```
data should be:
let obj = {
type: 'banana',
color: 'yelow',
};

```

**example hit :**
[get food data](https://ahmadosbeh-api-server.herokuapp.com/api/v1/food)

- https://ahmadosbeh-api-server.herokuapp.com/api/v1/food

  2- clothes

```
data should be:

let obj = {
type: 'T-shirt',
color: 'white',
};


```

**example hit :**
[get food data](https://ahmadosbeh-api-server.herokuapp.com/api/v1/clothes)

- https://ahmadosbeh-api-server.herokuapp.com/api/v1/clothes

- Returns : json with requested data

```

{
"domain": "https://ahmadosbeh-api-server.herokuapp.com/",
"status": "running",
"port": 3003
}

```

# PR link

[PR link](https://github.com/Ahmad-AbuOsbeh/api-server/pull/1)

**Tests**

**using supertest and jest**

- Unit Tests: npm run test

# UML

<br>

![UML-lab03](images/UML-lab04.jpg)
