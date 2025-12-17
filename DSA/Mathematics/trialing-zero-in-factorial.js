function CountTheTrailingZeroInFactorial(n){
    let res = 0;
    for(let i = 5;i<=n;i*=5){
        res = res+Math.floor(n/i)
    }
    return res
}
console.log(`The trailing zero in factorial is ${CountTheTrailingZeroInFactorial(5)}`)