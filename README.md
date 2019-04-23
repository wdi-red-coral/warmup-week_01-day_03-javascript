# Raindrops

## Factors

**Factors** are the numbers you multiply to get another number. For instance, factors of `15` are `3` and `5`, because `3×5` = `15`. 
Some numbers have more than one factorization (more than one way of being factored). 
For instance, `12` can be factored as `1×12`, `2×6`, or `3×4`.


## Problem

Create a file named `plingPlangPlong.js` and write a Javascript program that will store a number (eg `28`, `1755`, `9`, etc) and outputs the following:

- If the number contains 3 as a factor, output 'Pling'.
- If the number contains 5 as a factor, output 'Plang'.
- If the number contains 7 as a factor, output 'Plong'.
- If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

## Examples
- When the number is `28`, which has 7 as a factor.
  - The program will output "Plong".
- When the number is `1755`, which has 3 and 5 as factors.
  - The program will output "PlingPlang".
- When the number is `34`, which has neither 3, 5 nor 7 as a factor.
  - The program will output "34"


## Solution
let num = 33;

if (num % 3 == 0) { 
    console.log('Pling');

} 
else if (num % 5 == 0) { 
    console.log('Plang');

} 
else if (num % 7 == 0) { 
    console.log('Plong');

} 
else { 
    console.log(num); 
}