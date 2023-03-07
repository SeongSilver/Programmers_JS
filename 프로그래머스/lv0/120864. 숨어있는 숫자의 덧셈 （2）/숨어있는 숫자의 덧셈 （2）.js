function solution(my_string) {
    const regex = /\D/g;
    
    let a = my_string.split(regex);
    
    console.log(a);
    return a.map(a=> +a).reduce((a, b) => a+b, 0);
}