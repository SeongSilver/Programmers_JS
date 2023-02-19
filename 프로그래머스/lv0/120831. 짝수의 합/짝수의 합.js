function solution(n) {
    let numArr = Array(n).fill().map((_,i) => i+1).filter(i => i%2===0).reduce((a,b)=>a+b,0);
    
    return numArr;
}