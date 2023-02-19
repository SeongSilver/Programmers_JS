function solution(num_list) {
    var answer = Array(2).fill(0);
    
    for(let a of num_list){
        if(a % 2 ===0){
            answer[0] ++;
        }else{
            answer[1]++;
        }
    }
    
    return answer;
}