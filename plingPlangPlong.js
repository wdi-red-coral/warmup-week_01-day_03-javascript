let i; 
for (i =0; i<=100; i++) {
factorNum (i); 
}

let fNum; 
function factorNum(fNum) { 
    let h; 
   
 if ( fNum % 3 === 0 && fNum % 5 === 0) { 
   console.log("PlingPlang");
 } else if ( fNum % 5 === 0 && fNum % 7 === 0){
 console.log("PlangPlong"); 
   } else if ( fNum % 7 === 0 && fNum % 3 === 0){
   console.log("PlongPling"); 
    } else if (fNum % 3 === 0) {
        console.log("Pling");
    } else if (fNum % 5 === 0){
        console.log("Plang");
    } else if (fNum % 7 === 0) {
        console.log("Plong");   
    }else {
        console.log(fNum);
     }
} 
