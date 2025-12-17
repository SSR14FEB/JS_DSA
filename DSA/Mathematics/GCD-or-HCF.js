function findTheGCD(a,b,n=Math.min(a,b)){
    if(a%n==0&&b%n==0) return n
    return findTheGCD(a,b,--n)
}

console.log(`find the gcd by naive solution ${findTheGCD(4,6)}`)

// find the gcd by euclidean algorithm

function findTheGCDByEuclideanAlgo(a,b){
    if(a%b==0) return b
    return findTheGCDByEuclideanAlgo(b,a%b)
}

console.log(`GCD of a and b is ${findTheGCDByEuclideanAlgo(16,4)} by euclidean algorithm`)

function gcd(a,b){
    while(a%b!=0){
       a= a%b;
       [b,a]=[a,b]
    }
    return b 
}

console.log(` find the gcd of and b by euclidean algorithm ${gcd(4,6)}`)