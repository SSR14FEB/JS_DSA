function sieve(n){
    let isPrime = new Array(n+1).fill(true)

    for(let i = 2; i*i<=n; i++){
        if(isPrime[i]){
            for(let j = i*2;j<=n;j=j+i){
                isPrime[j] = false
            }
        }
    }

    for(let i = 2;i<n;i++){
        if(isPrime[i]){
            console.log(i)
        }
    }
}

sieve(10)