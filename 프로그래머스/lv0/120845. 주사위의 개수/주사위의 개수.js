function solution(box, n) {
    let array = [];
    for(let a of box){
        array.push(Math.floor(a/n));
    }
    console.log(array);
    return array.reduce((a,b) => a*b, 1);
}