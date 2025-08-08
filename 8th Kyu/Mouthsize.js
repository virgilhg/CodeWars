
/*
S: Take in a string, it'll be the name of an animal, return small if it's an alligator, wide if it's anything else.
P: you are taking in a string, which is the name of an animal, it'll mostly be that and nothing else. It can be uppercase, lowercase. 
R: return if it's an alligator, lowercase, return small, else, else, return wide.
E: 
mouthsize("Alligator") => small
mouthsize("Baboon") => wide
mouthsize("Mosquito")=> wide
*/

function mouthSize(animal) {
  if(animal.toLowerCase()=== "alligator"){
      return "small"
  }
  else{
      return "wide"
  }
}
