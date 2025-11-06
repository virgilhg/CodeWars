/*
Given a sentence containing two or more words, return the equivalent of the sentence when capitalized. E.g
capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!'
*/

function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')
    let capsArray = wordsArray.map(word=>{
        return word[0].toUpperCase() + word.slice(1)
    })
    return capsArray.join(' ')
}

/*
Complexity:
Scotch.io's test reveals that using the .map() and .slice() method is the fastest. Next, is .forEach() which is approximately 15% slower. And last, is the .map() and .replace() which is 29% slower.
*/