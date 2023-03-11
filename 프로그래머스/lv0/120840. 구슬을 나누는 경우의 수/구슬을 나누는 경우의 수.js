function solution(balls, share) {
    return factorial(balls) / (factorial(balls-share) * factorial(share));
}

const factorial = num => {
    let factorialNum = BigInt(1);
    
    for(let i = num; i>=2;i--){
        factorialNum*=BigInt(i)
    }
    return factorialNum
}