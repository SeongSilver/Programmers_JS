function solution(numbers) {
    const numbersWord = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i = 0;i<numbersWord.length;i++){
       numbers = numbers.replaceAll(numbersWord[i], numbersWord.indexOf(numbersWord[i]));
    }
    
    return Number(numbers);
}