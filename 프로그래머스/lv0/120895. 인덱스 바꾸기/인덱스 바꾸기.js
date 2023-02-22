function solution(my_string, num1, num2) {
    var answer = '';
    
    let stringArr = my_string.split("");
    const a = stringArr[num1];
    const b = stringArr[num2];
    
    stringArr[num1] = b;
    stringArr[num2] = a;
    
    return stringArr.join("");
}