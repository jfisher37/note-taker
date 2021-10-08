const fs = require('fs');
const db = require('./db/db.json');
const express = require ('express');

const app = express(); 

//set up PORT and middleware

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// set up get routes for HTMLs



// set up API routes


// set up listeners
app.listen(PORT, () =>
console.info(`listening in on PORT ${PORT}`));