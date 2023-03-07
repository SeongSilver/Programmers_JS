function solution(emergency) {
    var sortArr = [...emergency].sort((a,b) => b-a);
    
    for(let i = 0; i<sortArr.length;i++){
        emergency[i] = sortArr.indexOf(emergency[i])+1;
    }
    return emergency
}