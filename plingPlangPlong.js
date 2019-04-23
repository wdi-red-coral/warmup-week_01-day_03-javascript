let num ;
let pli = "Pling";
let plo = "Plong";
let pla = "Plang";
if (num%3===0 && num%5===0 && num%7===0){
    console.log(pli+pla+plo);
}
else if (num%3===0 && num%5===0){
    console.log(pli+pla);
}
else if (num%3===0 && num%7===0){
    console.log(pli+plo);
}
else if (num%5===0 && num%7===0){
    console.log(pla+plo);
}
else if (num%3===0){
    console.log(pli);
}
else if (num%5===0){
    console.log(pla);
}
else if (num%7===0){
    console.log(plo);
}
else{
    console.log(num);
}