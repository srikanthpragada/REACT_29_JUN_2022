
function process(func, value)
{
     func(value)
}

function display(msg) {
    console.log(msg)
}

// Passing a function as param 
process(display, "Hello!")
process(console.log, "Hello!")