function myFunction (num) {

    if ( num % 3 === 0 && num % 5 ===0 && num % 7 === 0 ) {
   console.log('fizzbuzz')
} else if ( num % 3 === 0 ) {
   console.log('pling');
} else if ( num % 5 === 0 ) {
   console.log('plang');
} else if ( num % 7 === 0 ) {
    console.log('plong');

} else {
  console.log(num.toString());
}
  
}
myFunction(70);


