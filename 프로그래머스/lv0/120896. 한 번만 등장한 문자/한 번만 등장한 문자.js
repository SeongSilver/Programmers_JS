function solution(s) {
    var answer = [];
    let arr = s.split(""); 

    for(let a of arr){
        if(s.indexOf(a) === s.lastIndexOf(a)) answer.push(a)
    }
    
    return answer.sort().join("");
}