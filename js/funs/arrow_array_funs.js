// Arrow functions with array methods 

let names = ["JavaScript", "Java", "Python", "C#"]
  
// find()  
var selname = names.find( name => name.startsWith('P') )  
console.log(selname)
selname = names.find( name => name.startsWith('V') )  
console.log(selname)


// forEach() 
names.forEach( function(n) {
     console.log(n)
});

names.forEach( (name) => console.log(name))
names.forEach( (name, idx) => console.log(name + " at "  + idx))

// filter()
var selnames = names.filter(name => name.length > 5);
console.log(selnames)

// map()
var upperNames = names.map(name => name.toUpperCase());
console.log(upperNames)
 

 