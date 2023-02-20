function solution(n) {
    var answer = Array(n).fill().map((_,a) => a+1).filter(a => a%2 !== 0);
        
    return answer;
}