function solution(s1, s2) {
    var answer = 0;
    
    for(let a of s1){
        for(let b of s2){
            if(a===b){
                answer++;
            }
        }
    }
    
    return answer;
}