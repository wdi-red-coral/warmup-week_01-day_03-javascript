let num = 28;

if (num%3 === 0 && num%5 === 0)
    console.log("PlingPlang");
else {
    if (num%3 === 0) 
        console.log("Pling");
    else {
        if (num%5 === 0)
            console.log("Plang");
        else {
            if (num%7 === 0)
                console.log("Plong");
            else {
                let numString = num.toString();
                console.log("Number is " + numString);
            }
        }
    }
}