function solution(score) {
    let answer = [];
    score = score.map(a => (a[0]+a[1])/2);
    let score2 = [...score].sort((a,b) => b-a);
    
    console.log(score);
    console.log(score2);
    
    for(let a of score){
        answer.push(score2.indexOf(a)+1);
    }
    
    
    
    return answer;
}