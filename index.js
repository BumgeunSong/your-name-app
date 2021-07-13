const express = require('express')
const app = express()
const axios = require('axios').default;
const path = require('path');
const methodOverride = require('method-override');

// Statice Resource in public folder
app.use(express.static(path.join(__dirname, 'public')));

// Parse HTTP request Body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set View & EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Use method override package with query value
app.use(methodOverride('_method'));

// Main page
app.get('/', (req, res) => {
    res.render('index');
})

// Start Listening
app.listen(5000, () => {
    console.log("Server is running on 5000!");
});