function solution(rsp) {
    const answer = [];
    let array = rsp.split("");
    for(let a of array){
        if(a === '2'){
            answer.push('0');
        }else if(a === '0'){
            answer.push('5');
        }else{
            answer.push('2');
        }
    }
    return answer.join("");
}