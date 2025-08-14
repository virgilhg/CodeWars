function sayHello( name, city, state ) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}
/*
S: take in an array of a full name and a city and a state as strings and a return “Hello, Fname Lname! Welcome to City, State”. 
P: Taking an array of the full name. It will always be a full name separated by a space, wrapped in a string. And outside of the array we have the city name and the state name. And we'll always have all of those. They'll always have the first letter uppercase. 
R: And our goal is to return it exactly like that. Return. “Hello, Fname Lname! Welcome to City, State”.

E:
sayHello(["Alpha", "Barry"], "Austin", "Texas")
*/
