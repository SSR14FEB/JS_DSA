const findThePrimeFactorialOfN = (n)=>{
    if(n<=1) console.log(1);
    for(let i = 2;i*i<n;i++){
        while(n%i==0){
            console.log(i);
            n=n/i;
        }
    }
    if(n>1) console.log(n)
}

findThePrimeFactorialOfN(12)