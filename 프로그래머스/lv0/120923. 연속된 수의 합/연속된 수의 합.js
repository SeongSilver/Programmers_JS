function solution(num, total) {
    //for문에 splice 함수 생성
    let answer = [];
    
    const a = Math.floor(total/num);
    if(num%2 !== 0){
        for(let i = a-Math.floor(num/2);i<=a+Math.floor(num/2);i++){
            answer.push(i);
        }    
    }else{
        for(let i = a-Math.floor(num/2)+1;i<=a+Math.floor(num/2);i++){
            answer.push(i);
        }
    }
        
    console.log(answer);
    
    return answer;
}