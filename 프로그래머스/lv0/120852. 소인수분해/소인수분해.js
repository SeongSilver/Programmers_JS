function solution(n) {
    var answer = [];
    let count = 2;
    while(n !== 1){
        if(n%count===0){
            answer.push(count);
            n /= count;
        }else{
            count++;
        }
    }
    
    return [...new Set(answer)];
}