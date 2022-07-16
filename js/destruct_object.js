
let obj = { x : 10, y : 20}

let { x, y } = obj 

console.log(x,y)

// Give alias 
let { x : f , y : s} = obj
console.log(f,s)