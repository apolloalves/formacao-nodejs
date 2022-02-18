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
    // res => dados enviados pelo usuário
    // req => resposta que vai ser enviada para o usuário
    res.send( req.params.name )
})

app.get('/hello/:name', ( req, res) => {
    const name = req.params.name
    res.send(`HI ${name}`)
})


// app.listen(4000, (err ) =>   {
//     if(err) { 
//     console.log( err ) 

//     }else {
//         console.log( 'Server running success' )
//     } 
// })

app.listen( 4000,() => console.log('Server running'))