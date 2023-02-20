function solution(array, height) {
    var answer = 0;
    
    for(let a of array){
        if(a > height){
            answer++;
        }
    }    
    
    return answer;
}