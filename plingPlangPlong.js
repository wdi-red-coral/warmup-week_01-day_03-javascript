function factors(num){
    if (num < 6 || num === 7 || (num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0))
        return console.log(num.toString());
    if(num % 3 === 0)
        console.log("Pling");
    if(num % 5 === 0)
        console.log("Plang");
    if(num % 7 === 0)
        console.log("Plong");
    
    
}

factors(parseInt(Math.random() * 100 + 6));