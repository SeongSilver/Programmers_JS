function solution(s) {
//     let arr1 = s.split("");
//     let arrBig = [];
//     let arrSmall = [];
//     for(let a of arr1){
//         if(a === a.toUpperCase()){
//             arrBig.push(a);
//         }else{
//             arrSmall.push(a);
//         }
//     }
    
    
//     arrBig = arrBig.sort().reverse().join("");
//     arrSmall = arrSmall.sort().reverse().join("");
    
//     console.log(arrBig);
//     console.log(arrSmall);
    
//     return arrSmall + arrBig;
    return s.split("").sort().reverse().join("");
}