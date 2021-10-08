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
app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, '/db/db.json')))


app.post('/api/notes', (req, res) => {
  
    const { title, text } = req.body;
  
      const newNote = {
        title,
        text,
      };
  
      
  
      fs.readFile('./db/db.json', `utf8`, (err, data) => {
      const parsedNotes = JSON.parse(data);
      parsedNotes.push(newNote);
  
     
  
      // Write the string to a file
      fs.writeFile('./db/db.json', JSON.stringify(parsedNotes), (err) =>
        err
          ? console.error(err)
          : console.log(
              `New Note Taken`
            )
      );
    }) 
    res.sendFile(path.join(__dirname, '/db/db.json'));
});

// set up listeners
app.listen(PORT, () =>
console.info(`listening in on PORT ${PORT}`));