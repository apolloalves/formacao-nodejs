// Import express 
const express = require( 'express' )
// init express
const app = express()

app.listen(4000, (err ) =>   {
    if(err) { 
    console.log( err ) 

    }else {
        console.log( 'Server running success' )
    } 
})