function solution(array, n) {
    var answer = [];
    let num = 0;
    let answer1 ; 
    for(let a of array){
        answer.push(Math.abs(n-a));
    }
    
    const minimum = Math.min(...answer);
    
    let realAnswer = [];
    
    for(let i = 0; i<answer.length;i++){
        if(answer[i] === minimum){
            realAnswer.push(array[i]);
        }
    }
    
    return Math.min(...realAnswer);
}