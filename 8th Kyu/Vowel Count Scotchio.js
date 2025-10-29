/*Given a string of text containing 0 or more vowels, count the number of vowels that can be found within the text. For example:
vowelsCounter('anehizxcv') // will return 3
With regex this function below is 88% faster than using a for of loop, tested with Jest.
*/

function vowelsCounter(text) {
    // Search text with Regex and store all matching instances 
    let matchingInstances = text.match(/[aeiou]/gi);

    // Check if matching instances exist then calculate length
    if (matchingInstances) {    
        // Return number of vowels
        return matchingInstances.length
    } else {
        return 0
    }
}
