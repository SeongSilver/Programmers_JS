function solution(array) {
    // var answer = 0;
    // let strArr;
    // for(let i = 0 ;i<array.length;i++){
    //     strArr = array[i].toString().split("");
    //     for(let j = 0 ; j<strArr.length;j++){
    //         if(strArr[j] === '7') answer++;
    //     }
    // }
    
    return array.join('').split('7').length-1;
}