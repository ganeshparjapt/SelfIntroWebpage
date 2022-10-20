const express = require("express");
const bodyparser = require("body-parser");

const path = require("path");
const app = express();
const port =3000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())
// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

//End points
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
})

// START THE SERVER
app.listen(port, () => {
    console.log(` successfully on port ${port}`);
});