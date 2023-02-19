function solution(sides) {
    var answer = 0;
    
    sides = sides.sort((a,b)=>b-a);
    
    if(sides[0] >= sides[1]+sides[2]){
        answer = 2;
    }else{
        answer = 1;
    }
    
    return answer;
}