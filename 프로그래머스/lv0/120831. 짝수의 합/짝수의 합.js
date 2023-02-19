function solution(n) {
    let numArr = [];
    while(n > 0){
        console.log("aaaaa")
        if(n%2===0){
            numArr.push(n)
            n -= 2;
            console.log(numArr);
        }else{
            n = n-1;
            numArr.push(n)
            n -= 2;
            console.log(numArr);
        }
    }
    
    return numArr.reduce((a, b) => a+b, 0);
}