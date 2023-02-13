function solution(id_list, report, k) {
     
    var answer = Array(id_list.length).fill(0);
    let reportCount = Array(id_list.length).fill(0);
     //신고횟수 담을 배열
  
    let reportFiltered = [...new Set(report)];
   
    let stopedId = [];
    
    //report에 담긴 신고횟수만큼 반복
    for(let i = 0; i<reportFiltered.length;i++){
        //report[i]를 띄어쓰기 기준으로 나눠서 배열로만들고 reportClone에 담음
        let [reportId1, reportedId1] = reportFiltered[i].split(" ");
        
        let idxOfReported = id_list.indexOf(reportedId1);
        reportCount[idxOfReported]+=1;
        if(reportCount[idxOfReported] >= k){
            stopedId.push(id_list[idxOfReported]);
        }
    }
    
    reportFiltered.map(data => {
        let [reportId2, reportedId2] = data.split(" ");
        
        if(stopedId.includes(reportedId2)){
            let existReportIdx = id_list.indexOf(reportId2);
            answer[existReportIdx]+=1;
        }
    })
    console.log(reportCount);
    console.log(answer);
    return answer;
}

