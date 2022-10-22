var prompt = require('prompt-sync')()
var name = prompt('Enter Your Name Here: ')

function firstName (a)  {
    return "Hello " + a
    //Name
}
console.log(firstName(name));