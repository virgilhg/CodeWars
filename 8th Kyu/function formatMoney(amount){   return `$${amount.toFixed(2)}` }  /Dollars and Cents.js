function formatMoney(amount){
  return `$${amount.toFixed(2)}`
}

/*
s: take a float and return it as a string with the 1-2 zeros at the end if none and a dollar sign at the front
P: take a float or int with no specific length
R: return the number as a float in a string with the dollar sign in front of the number
E: 
formatMoney(22.89) => "$22.89"
formatMoney(2) => "$2.00"
formatMoney(29.8) => "$29.80"
