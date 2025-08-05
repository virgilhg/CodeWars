/* I get an array of good and/or bad ideas, if i get only bad ones, i need to return fail
at leats one good, return Publish, 2 good return I smell a series

P: take in this["good", "bad", "good", "bad",...] 
R: return publish if at least one good, Fail no good, I smell a series
E: 
["good", "good", "good"] => I smell a series!
["bad", "bad", "bad"] => Fail!
["good", "bad", "bad"] => Publish!
*/

function well(x){
  let countGood= [];
  for (let i=0; i< x.length; i++){
     if(x[i] === "good"){
        countGood.push(x[i])
     }
  }
  if(countGood.length ===1 || countGood.length ===2){
     return "Publish!"
   }
  else if(countGood.length >2){
     return "I smell a series!"
   }
  else {
     return "Fail!"
   }}
