// function solution(k, score) {
//     var answer = [];
    
//     let honorArray = [];
    
//     //일자 = score.length
//     //일자가 k보다 같거나 작을 때에는 그중에 가장 작은 수를 answer 배열에 표시
//     //일자가 k보다 클 때는 가장 큰 값 3개중 제일 작은 것을 answer에 표시
//     for(let i = 0 ;i<score.length;i++){
//         if(i<k){
//             //일자가 k보다 작거나 같을 때는 그 중 가장 작은 수를 answer배열에 표시
//             honorArray.push(score[i]);
            
//             console.log(honorArray);
//         }else{
//             //일자가 k보다 클때는 가장 큰 값 3개중 제일 작은 것을 answer에 표시
//             if(i < score.length-1){
//                 //준비된 배열에 i+1일째까지 score[i]의 값을 넣음
//                 honorArray.push(score[i]);
//                 //배열 오름차순 정렬
//                 honorArray.sort((a, b) => a - b);
//                 //오름차순 정렬된 배열이기 때문에 length-1이 최대값 -2가 2번째 -3가 3번째 값
//                 //honorArray[honorArray.length-4] 이상의 값은 이 배열의 최대값3개가 들어가도록 필터링
//                 honorArray = honorArray.filter(num => num > honorArray[0]);
//                 console.log(honorArray);
//                 //필터링된 k개의 값 중 최소값을 answer에 추가
//                 answer.push(Math.min(...honorArray));
//             }else{
//                 honorArray.push(score[i]);
//                 answer.push(Math.min(...honorArray));
            
//             }
//         }      
            
        
//     }
    
//     return answer;
// }


function solution(k, score) {
    var answer = [];
    
    let honorArray = [];
    
    //일자 = score.length
    //일자가 k보다 같거나 작을 때에는 그중에 가장 작은 수를 answer 배열에 표시
    //일자가 k보다 클 때는 가장 큰 값 3개중 제일 작은 것을 answer에 표시
    for(let i = 0 ;i<score.length;i++){
        honorArray.push(score[i]);
        honorArray.sort((a, b) => b-a).splice(k);
         
        answer.push(Math.min(...honorArray));
    }
    
    return answer;
}