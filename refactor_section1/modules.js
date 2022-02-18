let title = 'Apollo Alves - NodeJs'

const sum =  ( x , y )  =>  { let result = x + y;console.log( `Result : ${result}` )}
const mult = ( x , y )  =>  { let result = x * y;console.log( `Result : ${result}` )}
const sub =  ( x , y )  =>  { let result = x - y;console.log( `Result : ${result}` )}
const div =  ( x , y )  =>  { let result = x / y;console.log( `Result : ${result}` )}


module.exports = { sum, mult, div, sub, title  }

