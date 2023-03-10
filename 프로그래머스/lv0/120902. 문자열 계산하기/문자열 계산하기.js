function solution(my_string) {
    const quest = my_string.split(" ");
    let answer = Number(quest[0]);
    quest.forEach((a, i) => {
        if(a === "+"){
            answer += Number(quest[i+1])
        }else if(a === "-"){
            answer -= Number(quest[i+1])
        }
    })
    
    return answer;
}