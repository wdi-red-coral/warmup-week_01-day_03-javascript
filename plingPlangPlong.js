let num = 28 ;



if (num%3 ===0 && num %5 ===0 && num %7 ===0){
    console.log("plangplingplong");
}
else if (num%3 ===0 && num %5 ===0 ){
    console.log("plangpling");
}else if (num%5 ===0 && num%7===0 ){
    console.log("plangplong");
}else if (num%3===0 && num%7===0 ){
    console.log("plangplong");}
else if (num % 3 ===0 ){
    console.log("Pling");
} else if (num %5 ===0){
    console.log("Plang");
} else if (num % 7===0){
    console.log("Plong");
}else {
    console.log("string.")
}