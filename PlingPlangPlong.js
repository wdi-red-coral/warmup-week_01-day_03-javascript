let num = 105; fact1 = "Pling"; fact2 = "Plang"; fact3 = "Plong";

if ( num % 3 === 0 && num % 5 === 0 && num % 7 === 0 )

{console.log(fact1 + fact2 + fact3);}

else if ( num % 5 === 0 && num % 7 === 0 )

{{console.log(fact2 + fact3);}}

else if ( num % 3 === 0 && num % 5 === 0 )

{{console.log(fact1 + fact2);}}

else if ( num % 3 === 0 && num % 7 === 0 )

{{console.log(fact1 + fact3);}}

else if ( num % 7 === 0 )

{{console.log(fact3);}}

else if ( num % 5 === 0 )

{{console.log(fact2);}}

else if ( num % 3 === 0 )

{{console.log(fact1);}}

else {console.log(num);}