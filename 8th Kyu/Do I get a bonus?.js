/* It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Dart, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
*/

//Solution
// take an int and a boalean, if true int*10, else return int as a string prefixed with "\u00A3"
// P: take in at int(whole number, non negative), bolean(true or false)
// R: return a string "\u00A3" + "int"

//E:

function bonusTime(salary, bonus){
  let newSalary
  // if bonus = true
  if (bonus){
    // salary *10 
    newSalary = salary *10
    // return "\u00A3" new salary
    return `\u00A3${newSalary}`
  }
  // else 
  else{
  // return salary
    return `\u00A3${salary}`
  }
}

// bonusTime(10000, true) // => $100000
// bonusTime(5, false) // => $5
// bonusTime(1000000, true) // => $10000000
