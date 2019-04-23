var factorialValue = function(factorValue)
{  
     if(factorValue%7==0)
     {
       console.log('Plong');
     } 
     else if(factorValue%3==0&&factorValue%5==0)
      {
        console.log('PlingPlang'); 
       }
     else if(factorValue%5==0)
      {
        console.log('Plang');
      }
     else if(factorValue%3==0)
      {
        console.log('Pling');
       }
     else 
         console.log(factorValue);
}