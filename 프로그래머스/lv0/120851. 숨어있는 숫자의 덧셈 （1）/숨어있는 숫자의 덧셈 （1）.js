function solution(my_string) {
    var answer = 0;
    const regex = /[^0-9]/g;
    
    my_string = my_string.replace(regex,"");
    answer = my_string.split("").map(a => parseInt(a)).reduce((a, b) => a+b,0);
    
    return answer;
}