let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
console.log("JavaScript".slice(0, 1) + "JavaScript".slice(4, 5));

//b) Without using .slice(), use method chaining to accomplish the same thing.
let firstLetter = language[0];
let lastLetter = language[4];
let outputStr = firstLetter + lastLetter; 

console.log(outputStr);


//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."
let nouns = "abbreviation";
let name = "JS";

console.log("The " + nouns + " for " + 'language ' + "is " + name + ".");


//d) Just for fun, try chaining 3 or more methods together, and then print the result.
let input = "The abbreviation for 'JavaScript' is 'JS'.";
let atIndex = input.indexOf(".");
let sentence = input.slice(21, atIndex);

console.log(sentence);
