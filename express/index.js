// Import express 
const express = require( 'express' )
// init express
const app = express()

//function callback
app.get('/', ( req, res ) => {
     res.send( 'Welcome guide programmer' ) 
})

app.get( '/blog', ( req, res ) => {
    res.send( 'Welcome my blog')
}) 

app.get( '/canal/youtube', ( req, res ) => {
    res.send( 'Welcome youtube' )
})

app.listen(4000, (err ) =>   {
    if(err) { 
    console.log( err ) 

    }else {
        console.log( 'Server running success' )
    } 
})
