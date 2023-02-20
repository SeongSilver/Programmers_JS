function solution(hp) {
    const ant1 = Math.floor(hp/5);
    const ant2 = Math.floor((hp-ant1*5)/3);
    const ant3 = hp-ant1*5-ant2*3;
    console.log(ant1, ant2, ant3)    
    
    return ant1+ant2+ant3;
}