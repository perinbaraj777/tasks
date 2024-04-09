const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors');

const add = express();
add.use(cors());
add.use(bodyParser.json());
add.use(express.static('public'));


// Custom middleware function to log request details
const loggerMiddleware = (request, response, next) => {
    console.log(`Request URL: ${request.url}`);
    console.log(`Request Method: ${request.method}`);
    next(); 
  };
  
  
  add.use(loggerMiddleware);
  
  
  add.get('/', (request, response) => {
    response.send('Hello World!');
  });
  
add.listen(4000,()=>                    
{
    console.log("server running in 4000 port");
}
)
