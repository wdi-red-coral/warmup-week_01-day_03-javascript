function factors(num){
    if (num < 6 && num === 7)
        return;
    if(num % 3 === 0)
        console.log(num + " is Pling");
    if(num % 5 === 0)
        console.log(num + " is Plang");
    if(num % 7 === 0)
        console.log(num + " is Plong");
    
}

factors(parseInt(Math.random() * 100 + 6));