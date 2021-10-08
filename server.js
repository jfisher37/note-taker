const fs = require('fs');
const db = require('./db/db.json');
const express = require ('express');
const path = require ('path');

const app = express(); 

//set up PORT and middleware

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// set up get routes for HTMLs

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

// set up API routes
app.get('/api/notes', (req, res) => {fs.readFile('./db/db.json', (err, data) =>
res.send(data))}); 


app.post('/api/notes', (req, res) =>)

// set up listeners
app.listen(PORT, () =>
console.info(`listening in on PORT ${PORT}`));