function solution(age) {
    
    let year = new Date().getFullYear();
    var answer = year - age;
    return answer;
}