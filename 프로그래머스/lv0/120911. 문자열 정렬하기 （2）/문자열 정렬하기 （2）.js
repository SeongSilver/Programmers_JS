function solution(my_string) {
    var answer  = my_string.split("").map(a => a.toLowerCase()).sort((a,b) => a>b ? 1 : -1).join("");
    return answer;
}