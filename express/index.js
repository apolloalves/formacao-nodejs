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

// Route param
app.get('/ola/:name', ( req, res ) => {
    // req => resposta que vai ser enviada para o usuário
    // res => dados enviados pelo usuário
    res.send( req.params.name )
})

app.get('/hello/:name', ( req, res ) => {
    const name = req.params.name
    res.send(`HI ${name}`)
})

// Route two param
app.get('/person/:name/:company', (req, res) => {
    
    const name = req.params.name
    const company = req.params.company
    
    res.send( `Hello ${name} of ${company}` )
    
})

// route with two params in obj
app.get( '/username/:name/:age', ( req, res ) => {

    const user = { name: req.params.name,age: req.params.age }
    res.send(`Hello ${user.name} of ${user.age}`)

} )

// Route Params Not Required
app.get('/subscribe/:articles?', ( req, res ) => {
    
    const channel = req.params.articles
    channel 
        ? res.send( `Article: ${channel}` ) 
        : res.send( `Welcome to my channel on youtube` )

})

app.listen( 4000,() => console.log('Server running'))