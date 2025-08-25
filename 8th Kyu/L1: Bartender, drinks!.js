function getDrinkByProfession(param){
 if(param.toLowerCase() === "jabroni"){
    return "Patron Tequila"
  }
  else if(param.toLowerCase() === "school counselor"){
    return "Anything with Alcohol"
  }
  else if(param.toLowerCase() === "programmer"){
    return "Hipster Craft Beer"
  }
  else if(param.toLowerCase() === "bike gang member"){
    return "Moonshine"
  }
  else if(param.toLowerCase() === "politician"){
    return "Your tax dollars"
  }
  else if(param.toLowerCase() === "rapper"){
    return "Cristal"
  }
  else{
    return "Beer"
  }
}

/*
S: take a string as input and based on the table if the string is on it return its appropriate output, and if not return Beer
P: taking a string(can be anything, upper case or lowercase)
R: return Beer to any input not on the table and else return other inputs based on the table
E:
getDrinkByProfession("jabroNi") => "Patron Tequila"
getDrinkByProfession("programmer") => "Hipster Craft Beer"
getDrinkByProfession("tOod") => "Beer"
*/
