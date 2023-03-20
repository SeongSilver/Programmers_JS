function solution(polynomial) {
    

    let array = polynomial.split(" + ")
    
    let num = 0;
    let xnum = 0;
    
    array.map(a => {
        let xString;
        if(a.includes("x")){
            xString = a.replace("x", "") ? a.replace("x", "") : "1";
            console.log(xString)
            xnum += Number(xString);
        }else{
            num+=Number(a);
        }
        
    })
    
    let answer = [];
    xnum ? answer.push(`${xnum === 1 ? "" : xnum}x`) : ""
    num ? answer.push(num) : "";
    
    return answer.join(" + ")
}