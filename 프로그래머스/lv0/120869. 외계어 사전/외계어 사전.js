function solution(spell, dic) {
    // let answer = 2;
    // dic.map(a => {
    //     let count = 0;
    //     for(let b of spell){
    //         a.includes(b) ? count++ : null;
    //     }
    //     count === spell.length ? answer = 1 : answer;
    // })
    // return answer;
    
    //dic에 필터 메서드를 건다
    //spell의 요소들이 dic의 인덱스를 하나씩 돌면서 b의 모든 걸 포함하는지
    //Array.prototype.every() : 배열의 각 엘리먼트에 대해서 테스트 함수의 반환 값이 모두 true인지 확인
    //모든 case가 true일 때 true를 반환. 기존 배열값 변경 X
    return dic.filter(a => spell.every(b => a.includes(b))).length ? 1 : 2 ;

}