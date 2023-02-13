function solution(new_id) {
    var answer = '';
    
    //알파벳 소문자 치환
    new_id = new_id.toLowerCase();
    console.log("1", new_id);
    //소문자, 숫자, 밑줄 : \w, 빼기:\-, 마침표:\.
    new_id = new_id.replace(/[^\w\-\.]/g,"");
    console.log("2", new_id);
    //마침표 .. 2번 이상 연속되면 하나의 마침표로 치환
    new_id = new_id.replace(/\.{2,}/g,".");
    console.log("3", new_id);
    //마침표가 처음이나 끝에 위치하면 제거 
    new_id = new_id.replace(/^\.|\.$/g,"");
    console.log("4", new_id);
    //빈 문자열이라면 a대입
    if(new_id.length === 0){
      new_id = "a";  
    } 
    console.log("5", new_id);
    ///길이가 16자 이상이면 첫 15개의 문자를 제외한 문자 모두 제거
    //만약 제거 후 마침표가 끝에 아이디 끝에 위치하면 마침표 제거
    if(new_id.length>15){
        new_id = new_id.substring(0,15);
        if(new_id[new_id.length-1] === "."){
            new_id = new_id.slice(0,-1);
        }
    }
    console.log("6", new_id);
    //길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복
        while(new_id.length < 3){
            new_id += new_id[new_id.length-1];
        }
    
    console.log("7", new_id);
    
    
    return new_id;
}