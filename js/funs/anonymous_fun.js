
function process(func, value)
{
     func(value)
}
 
// Using anonymous function 
process( 
    function(msg)
    {
       console.log(msg.toUpperCase())
    },
    'Javascript'
);

// Function Expression 
let fun = function(msg)
{
   console.log(msg.toLowerCase())
};

process(fun, 'typescript')