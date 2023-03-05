function solution(i, j, k) {
    let answer = 0;
    
    let array = [];
    
    for(let a = i;a<=j;a++){
        array = String(a).split("");
        for(let b = 0;b<array.length;b++){
            if(array[b] === String(k)){
                answer++;
            }
        }
    }
    
    return answer;
}