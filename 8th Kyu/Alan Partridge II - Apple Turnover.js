function apple(x){
   x= Number(x)
   if(x*x>1000){
      return 'It\'s hotter than the sun!!'
   }
   else{
      return 'Help yourself to a honeycomb Yorkie for the glovebox.'
   }
}


/*
S: if the input x^2 >1000, return 'It's hotter than the sun!!' and else I should return 'Help yourself to a honeycomb Yorkie for the glovebox'
P: taking an input x(can be a positive int or a num wrapped in a string)
R: return if x^2>1000 'It's hotter than the sun!!' else return 'Help yourself to a honeycomb Yorkie for the glovebox'
E: 
apple("80") => 'Help yourself to a honeycomb Yorkie for the glovebox'
apple("1001") => 'It's hotter than the sun!!'
apple(10) => 'Help yourself to a honeycomb Yorkie for the glovebox'
*/
