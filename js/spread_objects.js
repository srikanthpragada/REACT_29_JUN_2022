/ Spread operator with object

let p2 = { ...person, mobile: '484883343', email  : 'alex@yahoo.com' };
console.log(p2)

function display({name, email}) {
    console.log(name)
    console.log(email)
}

display(person)   // To be done 
