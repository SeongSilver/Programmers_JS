function solution(quiz) {
    const answer = [];
    quiz.map(a => {
        //각 식을 띄어쓰기로 구분해서 따로 배열로 만들어주고 숫자는 숫자로 형변환
        const mathQuiz = a.split(" ");
        
        const num1 = Number(mathQuiz[0]);
        const num2 = Number(mathQuiz[2]);
        const exampleAnswer = Number(mathQuiz[4]);
        let realAnswer = 0;
        if(mathQuiz[1] === "+"){
            realAnswer = num1+num2;
        }else{
            realAnswer = num1-num2;
        }
        
        exampleAnswer === realAnswer ? answer.push("O") : answer.push("X");
    })
    return answer
}