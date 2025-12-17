function CountTheDigit(n){
    let count = 0;
    while(n > 0){
        count++;
        n = Math.floor(n/10)
    }
    return count;
}

// console.log("total digits in this number are ",CountTheDigit(930))

function CountTheDigitByRecursion(n,count){
    if(n==0) return count;
    return CountTheDigitByRecursion(Math.floor(n/10),++count)
}

console.log("total digits in this number are ",CountTheDigitByRecursion(9430,0))