// Dependencies
// =============================================================
const express = require('express');
const exphbs = require('express-handlebars');
// Require the 'express-session' module
// YOUR CODE HERE
const session = require('express-session');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Sets Handlebars as the default template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set up the session with the 'secret', 'resave', 'saveUninitialized' options
//
// YOUR CODE HERE
app.use(
  session ({
    secret: "Super secret secret",
    resave: false,
    saveUninitialized: false
  })
);

// Data
// =============================================================
const books = [
  {
    title: 'Love You Forever',
    read: false,
    author: 'Robert Munsch'
  },
  {
    title: 'The Giving Tree',
    read: false,
    author: 'Shel Silverstein'
  },
  {
    title: 'Where the Red Fern Grows',
    read: true,
    author: 'Wilson Rawls'
  },
  {
    title: 'The Fault in Our Stars',
    read: true,
    author: 'John Green'
  },
  {
    title: 'Out of My Mind',
    read: false,
    author: 'Sally Engelfried'
  },
  {
    title: 'Wonder',
    read: true,
    author: 'Barbara Schultz'
  }
];

// Routes
// =============================================================

app.get('/', (req, res) => {
  if (req.session.countVisit) {
    // If the 'countVisit' session variable exists, increment it by 1 and set the 'firstTime' session variable to 'false'
    // YOUR CODE HERE
    console.log('not first time')
    req.session.countVisit++
    req.session.firstTime = false;
  } else {
    // If the 'countVisit' session variable doesn't exist, set it to 1 and set the 'firstTime' session variable to 'true'
    // YOUR CODE HERE
    console.log('first time')
    req.session.countVisit = 1;
    req.session.firstTime = true;
  }
  const data = {
    // Include the 'books' array, 'countVisit' and 'firstTime' session variables to be sent over to `index.handlebars`
    // YOUR CODE HERE
    library: books,
    //req.session.countVisit
    
  };
  res.render('index', data);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});
