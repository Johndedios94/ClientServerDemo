const express = require("express")
const server = express()
const cors = require("cors");

const names = [
  {
    "name": "john"
  },
  {
    "name": "jared"
  },
  {
    "name": "billy"
  }
]

const favfoods = [
  {
    "food": "chicken",
    "age": 10
  },
  {
    "food": "pizza",
    "age": 5
  }
]

server.use(cors());

server.get("/favfoods", (request, response)=>{
  response.send(favfoods)
})

server.get("/getnames", (request, response) =>{
  response.send(names)
})

server.listen(3001, function (){ console.log("server has started!") });
