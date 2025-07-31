/*write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/
/*Solution is incomplete. Challenge was time restricted, with more time I'll use the iteration i and to 
concactenate with the str use a modulo operation.*/

// take in an int as a size and return 1s and 0s alterning based on the size given and starting with 1
//P: will be number(int, positive, varies)
//R: will return a binary code(1&0) as a string, starting at 1 
//E:

function stringy(size) {
    // define empty string
    let str = ""
    // Loop thru based on the size
    for(let i=0; i=size; i++){
    // Concantenate the 1&0
       str += "10"
}
    return str
}

// stringy(8) => "10101010"
// stringy(2) => "10"
// stringy(1) => "1"
