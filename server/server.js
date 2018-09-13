// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) ); // <--- NEEDED FOR POST with JQ AJAX
// globals
const PORT = 5000;


// spin up server

app.listen( PORT, ()=>{
    console.log( 'server is up on:', PORT );
});

// end server up

// get route

// post route