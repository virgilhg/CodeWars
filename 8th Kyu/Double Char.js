/* Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/



// taken in a string("abcde"), return another string("aabbecddee")
// P: taking string, different length, "AscDE"
// R: simple return
// E:
function doubleChar(str){
// for loop targeting each element
let reStr = ""
for (let i =0; i< str. length; i++){
  // repeat method with number of repetition of 1
  reStr += str[i]. repeat (2)
// return repeated string
return reStr

"abcde" // →> "aabbceddee"
"ZDctP" // →> "ZZDDecTttP"
"KHGDL" // →> "KKHHGGDDLL"
