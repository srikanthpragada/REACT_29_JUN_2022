function process(func, value)
{
     func(value)
}
 
// Using Arrow function 
process( 
    msg => console.log(msg),
    'Javascript'
);
 