function findTheNumberIsPrimeOrNot(isP,n=Math.ceil(Math.sqrt(isP))){
    if(isP==2) return true
    if(isP%n!=0 && n==2) return true
    if(isP%n==0 && n==2) return false 
    return findTheNumberIsPrimeOrNot(isP,--n)
}

console.log(`find the number is prime  ${findTheNumberIsPrimeOrNot(13)}`)

// the time complexity of this is O(sqrt(n)) and the sc is O(sqrt(n))

// in more efficient way we can exclude the multiples of two and three so we can jump from n+6 or n-6 at a same time 

function isPrime(n,i=5){
    if(n==1) return false 
    if(n==2 || n==3 || n==5) return true;
    if(n%2==0 || n%3==0) return false;
    if(i*i>n) return true
    if(n%i==0 || n%(i+2)==0) return false 
    return isPrime(n,i+=6)
    
}

console.log(isPrime(101))

// in this programme we cover almost all these conner cases so the time complexity is O((sqrt(n))) space complexity would be O(sqrt(n))

