const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

const users = [
    {name: 'Anson', age:22},
    {name: 'Kelvin', age:21},
    {name: 'Michelle', age:22}
]; 

const posts = [
    {title: 'My favourite foods'},
    {title: 'My favourite games'}
]; 

app.get('/', (req, res) => {
    res.send({
        msg: 'Hello!',
        user: { }
    });
}); 

app.get('/users', (req,res) => {
    res.status(200).send(users); 
});

app.post('/', (req,res) => {
    const user = req.body; 
    users.push(user); 
    res.status(201).send('Created User');
});

app.get('/users/:name', (req, res) => {
    const { name } = req.params; 
    const user = users.find((user) => user.name === name); 
    if (user) res.status(200).send(user);
    else res.status(404).send('Not Found'); 
});

app.get('/posts', (req, res) => {
    console.log(req.query); 
    const { title } = req.query; 
    if (title) {
        const post = post.find((post) => post.title === title);
        if (post) res.status(200).send(post); 
        else res.status(404).send('Not Found');
    }
    res.status(200).send(posts); 
});

app.listen(5000, () => {console.log("Server startet on port 5000")})