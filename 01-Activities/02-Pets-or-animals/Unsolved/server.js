// Dependencies
// =============================================================
const express = require('express');
const exphbs = require('express-handlebars');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine
// YOUR CODE HERE
const hbs = exphbs.create({})
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Data
// =============================================================
const animals = [
  {
    animalType: 'dog',
    pet: true,
    fierceness: 4
  },
  {
    animalType: 'cat',
    pet: true,
    fierceness: 6
  },
  {
    animalType: 'giraffe',
    pet: false,
    fierceness: 4
  },
  {
    animalType: 'zebra',
    pet: false,
    fierceness: 8
  },
  {
    animalType: 'lion',
    pet: false,
    fierceness: 10
  }
];

// Routes
// =============================================================

app.get('/all-pets', (req, res) => {
  // Loop through the animals, and send those that are pets to the `index.handlebars` file.
  // Hint: Handlebars requires an object to be sent to the `index.handlebars` file, not an array!
  //
  // YOUR CODE HERE
  let pets = [];

  for(let i = 0; i < animals.length; i++){
    if (animals[i].pet === true){
      pets.push(animals[i])
    }
  }

const animalObject = {pets}

console.log(animalObject)

  res.render('index', animalObject)
});

app.get('/all-non-pets', (req, res) => {
  // Loop through the animals, and send those that are NOT pets to the `index.handlebars` file.
  // Hint: Handlebars requires an object to be sent to the `index.handlebars` file, not an array!
  //
  // YOUR CODE HERE
  let pets = [];

  for(let i = 0; i < animals.length; i++){
    if (animals[i].pet === false){
      pets.push(animals[i])
    }
  }

const animalObject = {pets}

console.log(animalObject)

  res.render('index', animalObject)
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});
