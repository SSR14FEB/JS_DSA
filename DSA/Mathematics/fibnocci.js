function fibonacci(n,i=0,j=1){
    if(n==0) return
    console.log(i)
    return fibonacci(--n,i+j,j=i)
}

fibonacci(7)

// nth fibonacci series

function nthFibonacci(n){
    if(n<=2) return n-1
    let sum = nthFibonacci(n-1) + nthFibonacci(n-2)
    return sum
}

console.log(nthFibonacci(5))