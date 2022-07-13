
let customers = []

customers["David"] = "3939333393"
customers["Jason"] = "3183883322"

customers.push("393958584")


// Take index 
for (let name in customers)
{
    console.log(`${name} - ${customers[name]}`)
}
