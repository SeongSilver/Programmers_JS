function solution(num, k) {
    var answer = 0;
    
    answer = String(num).includes(k) ? String(num).indexOf(k)+1 : -1
    
    return answer;
}