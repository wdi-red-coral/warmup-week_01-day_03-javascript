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
// if 3 & 7 => plingPlong
// if 7 & 5 => plangPlong
// if 3 & 5 & 7 => plingPlangPlong
// testing editing/pushing after the pull request 