function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    let a = numer1 * denom2 + numer2 * denom1;
    let b = denom1 * denom2; 
    let gcd = 1;

    for(let i = 2; i<=Math.min(a, b);i++){
        if(a%i === 0 && b%i === 0){
            gcd = i;
        }
    }

    console.log(gcd)

    answer.push(a/gcd);
    answer.push(b/gcd);

    
    return answer;
}