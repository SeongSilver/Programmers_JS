function solution(s) {
    // let arr = s.split(" ");
    // for(let i = 0 ; i<arr.length;i++){
    //     if(arr[i] === "Z"){
    //         if(arr[i-1]){
    //             arr.splice(i-1,2)    
    //             i-=2;
    //         }
    //     }
    // }
    // return arr.map(a=>Number(a)).reduce((a, b) => a+b, 0);
    
    return s.split(' ').reduce((a, b) => b === 'Z' ? a.slice(0,-1) : [...a, b], []).map(a => Number(a)).reduce((a,b) => a+b, 0);
}