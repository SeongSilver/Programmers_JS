function solution(order) {
    var answer = 0;
    let arr = String(order).split("").map(a=>{
        if(a%10 === 3 || a%10 === 6|| a%10 === 9) {answer++
    }else if(a===0) return;})
    return answer;
}