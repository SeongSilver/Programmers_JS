function solution(babbling) {
    var answer = 0;
    
    var musseug = ["aya", "ye", "woo", "ma"];
    
    //매개변수로 받은 babbling 돌릴거
    for(let i = 0; i<babbling.length; i++){
        let babblingClone = babbling[i];
        
        for(let j = 0;j<musseug.length;j++){
            if(babblingClone.includes(musseug[j].repeat(2))){
                break;
            }
            babblingClone = babblingClone.replaceAll(musseug[j],' ');   
        }
        console.log(babblingClone);
        if(babblingClone.split(" ").join("").length !== 0){
            continue;
        }else{
            answer++;
        }
    }
    
    return answer;
}