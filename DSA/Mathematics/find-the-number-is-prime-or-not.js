function findTheNumberIsPrimeOrNot(isP,n=Math.ceil(Math.sqrt(isP))){
    if(isP==2) return true
    if(isP%n!=0 && n==2) return true
    if(isP%n==0 && n==2) return false 
    return findTheNumberIsPrimeOrNot(isP,--n)
}

console.log(`find the number is prime  ${findTheNumberIsPrimeOrNot(13)}`)

// the time complexity of this is O(sqrt(n)) and the sc is O(sqrt(n))