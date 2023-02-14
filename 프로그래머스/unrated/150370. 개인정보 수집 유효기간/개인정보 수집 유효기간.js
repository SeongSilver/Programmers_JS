// function solution(today, terms, privacies) {
//     var answer = [];

//     let expiryType = {};
    
//     for(let i = 0;i<terms.length;i++){
//         let [Alphabet, expiryMonth] = terms[i].split(" ");
//         expiryType[Alphabet] = expiryMonth;
//     }

//     for(let j = 1 ;j<=privacies.length;j++){
//         let [originDate, expiry] = privacies[j-1].split(" ");
//         let dateArray = originDate.split(".");   
//         let [year, month, date] = dateArray.map(Number);
//         //expiry와 같은 expiryType을 찾아서 해당 개월만큼 month에 더해주는데 
//         //12가 넘으면 year을 1더해 주고 아니면 month만 찾은 키의 value 값 만큼 더해준다
//         if(month+parseInt(expiryType[expiry])>12){
//             year = year + 1;            
//             month = month+parseInt(expiryType[expiry])-12;
            
//         }else{
//             month = month+parseInt(expiryType[expiry]);
//         }
        
//         if(date - 1 === 0){
//             date = 28;
//             month = month -1;
//         }else{
//             date = date-1;
//         }
        
//         let todayClone = today.split(".");
//         let [todayYear, todayMonth, todayDate] = todayClone.map(Number);
        
//         console.log(j);
//         console.log(todayYear, todayMonth, todayDate);
//         console.log(year, month, date);
        
//         if(todayYear > year){
//             answer.push(j);
//         }else if (todayYear === year){
//             if(todayMonth > month){
//                 answer.push(j);
//             }else if (todayMonth === month){
//                 if(todayDate > date){
//                     answer.push(j);
//                 }
//             }
//         }
        
//         //date 객체...로 풀어...
//     }
//     console.log(answer);
    
    
    
//     return answer;
// }

//위 코드의 문제는 약관 종류와 유효기간에서 온 값이 12개월이 아니라 무수히 늘어날 시에 생기는 오류 때문에
//12% 나누기로 풀어보려다가 Date를 쓰라는 추천을 받고 다시 풀어본다..


function solution(today, terms, privacies) {
    var answer = [];
    today = new Date(today);
    let expiryType = {};
    
    for(let i = 0;i<terms.length;i++){
        let [Alphabet, expiryMonth] = terms[i].split(" ");
        expiryType[Alphabet] = expiryMonth;
    }

    for(let j = 1 ;j<=privacies.length;j++){
        console.log(j);
        let [originDate, expiry] = privacies[j-1].split(" ");
        let expiryDay = new Date(originDate); 
        let addMonth = parseInt(expiryType[expiry]);
        expiryDay = new Date(expiryDay.setMonth(expiryDay.getMonth()+addMonth));
        expiryDay = new Date(expiryDay.setDate(expiryDay.getDate()-1));
        
        if(today > expiryDay){
            answer.push(j);
        }
        
                    
    }
    console.log(answer);
    
    return answer;
}