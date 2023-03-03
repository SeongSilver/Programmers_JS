function solution(num_list, n) {
    var answer = [[]];
    
    for (let i = 0;;i++){
        if(num_list.length === 0) break;
        answer[i] = [];
        for(let j = 0; j<n;j++){
            answer[i].push(num_list.shift());
        }
    }
    
    return answer;
}