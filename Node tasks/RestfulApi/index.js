const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors');

const add = express();
add.use(cors());
add.use(bodyParser.json());
add.use(express.static('public'));


let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' }
];



// Get all users
add.get('/users', (req, res) => {
    res.json(users);
    console.log(users)
});

// Get user by ID
add.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
        
    }
});

// Create a new user
add.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).send('User created successfully');
});

// Update user by ID
add.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updateUser = req.body;
    users = users.map(user => {
        if (user.id === userId) {
            return { ...user, ...updateUser };
        }
        return user;
    });
    res.send('User updated successfully');
});

// Delete user by ID
add.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(user => user.id !== userId);
    res.send('User deleted successfully');
});

add.listen(3000,()=>                    
{
    console.log("server running in 3000 port");
}
)
