function FactorialOfN(n){
    if(n==1||n==0) return 1
    return n*FactorialOfN(n-1)    
}
console.log(`Factorial of n is ${FactorialOfN(5)}`)