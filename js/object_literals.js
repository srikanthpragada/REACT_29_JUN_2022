
function print_name(p) {
    console.log(p.name)
}

let person = { name: 'Alex', email: 'alex@gmail.com' }  // object literal 
let player = { name: 'Dhoni', game : 'Cricket'}

console.log(person.name)
console.log(person['name'])

for(let k in person) 
  console.log(k + '-' + person[k])

print_name(person)
print_name(player)
