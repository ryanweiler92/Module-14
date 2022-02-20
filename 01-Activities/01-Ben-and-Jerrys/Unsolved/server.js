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
// Add your Dummy Data HERE
const icecreams = [
  {name: 'Milk and Cookies', price: 10, awesomeness: 3},
  {name: 'Chocolate Peanut Butter Split', price: 4, awesomeness: 8},
  {name: 'Bourbon Pecan Pie', price: 1, awesomeness: 1},
  {name: 'Chubby Hubby', price: 5, awesomeness: 7},
  {name: 'Coffee Toffee Bar Crunch', price: 6, awesomeness: 2},
  {name: "Ice Cream Sammie", price: 11, awesomeness: 15 }
];
// Routes
// =============================================================

// GET route for getting all of the ice cream flavors
app.get('/', (req, res) => {
  let results = icecreams
  .then(icecreamData => {
    const icecream = icecreamData.map(post => post.get({ plain: true}));

    res.render('all', {
      icecream
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
  })


  
});

// Create a route for getting a specific ice cream flavor
//
// YOUR CODE HERE
//

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
