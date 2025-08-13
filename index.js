const express = require( "express" ) 

const app = express()

// app.get( "/", ( req, res ) => res.send( "Homepage" ) )

app.listen( 3_000, () => console.info( "Server running at: 3000" ))