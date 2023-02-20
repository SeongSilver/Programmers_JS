function solution(cipher, code) {
    let cipherArray = cipher.split("");
    let answer = [];
    console.log(cipherArray)
    for(let i = 1; i<=cipherArray.length;i++){
        if(i%code === 0){
            answer.push(cipherArray[i-1]);
        }
    }
    return answer.join("");
}