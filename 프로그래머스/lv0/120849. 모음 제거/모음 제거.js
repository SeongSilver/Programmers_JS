function solution(my_string) {
    const moeum = ["a", "e", "i", "o","u"];
    for(let a of moeum){
        my_string = my_string.replaceAll(a,"");    
    }
    return my_string
}