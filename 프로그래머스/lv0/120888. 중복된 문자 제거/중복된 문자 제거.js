function solution(my_string) {
    let new_string = new Set(my_string);
    return [...new_string].join("");
}