let num = 34
if (num % 3 == 0 && num % 5 == 0) {
    console.log("PlingPlang");
} else if (num % 5 == 0 && num % 7 == 0) {
    console.log("PlangPlong");
} else if (num % 3 == 0 && num % 7 == 0) {
    console.log("plingPlong");
} else if (num % 3 == 0 && num % 5 == 0 && num % 7 == 0) {
    console.log("PlingPlangPlong");
} else if (num % 3 == 0) {
    console.log("Pling");
} else if (num % 5 == 0) {
    console.log("Plang");
} else if (num % 7 == 0) {
    console.log("Plong");
} else {
    console.log(num.toString());
}
