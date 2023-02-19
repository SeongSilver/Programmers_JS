function solution(n) {
    var answer = 0;
    n%7 === 0 ?  answer = Math.floor(n/7) : answer = Math.floor(n/7)+1;
    return answer;
}