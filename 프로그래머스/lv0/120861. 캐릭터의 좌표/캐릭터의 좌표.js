function solution(keyinput, board) {
    //초기위치
    let answer = [0,0];
    
    //범위구하기
    const [limitX, limitY] = board.map(a => Math.abs(Math.floor(a/2)));
    
    //keyinput 마다 각 좌표 더하기 빼기
    keyinput.map(a =>{
        switch(a){
            case 'left' :  answer[0]--; break;
            case 'right' : answer[0]++; break;
            case 'up' : answer[1]++; break;
            case 'down' : answer[1]--; break;
        }
        //해당 좌표의 절대값이 범위보다 크면 양수일때는 범위값이 음수일땐 -범위 값이 answer
        if(Math.abs(answer[0])>limitX){
            answer[0] = answer[0] > 0 ? limitX : limitX * -1;
         }
        if(Math.abs(answer[1])>limitY){
            answer[1] = answer[1] > 0 ? limitY : limitY * -1;
        }
    });
      
    
    
    return answer;
    
}