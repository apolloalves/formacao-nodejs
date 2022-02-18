//Módule native
const http = require( 'http' )

http.createServer( ( req, res ) => res.end( '<h1>Welcome Server with NodeJS</h1>' )).listen( 3000 )
console.log( 'Server is running port: 3000')