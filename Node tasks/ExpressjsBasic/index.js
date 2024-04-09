const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors');

const add = express();
add.use(cors());
add.use(bodyParser.json());
add.use(express.static('public'));


// Route for handling GET requests
add.get('/get', (request, response) => {
  response.send('GET request received');
});

// Route for handling POST requests
add.post('/post', (request, response) => {
  const { message } = request.body;
  response.send(`POST request received with message: ${message}`);
});


add.listen(4000,()=>                    
{
    console.log("server running in 4000 port");
}
)

