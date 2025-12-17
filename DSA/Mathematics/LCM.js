function findTheLCM(a,b,c=Math.max(a,b)){
    if(c%a==0 && c%b==0) return c
    return findTheLCM(a,b,++c)
}

console.log(`find the lcm of two numbers by euclidean algo ${findTheLCM(2,7)}`)

// time complexity is O(lcm - max(a,b)), space complexity is O(n)

// now lets talk about efficient solution (a*b/gcd(a,b)) the GDC function works on euclidean algorithm which has time complexity of O(log(min(a,b))) 

function GCD(a,b){
    if(a%b==0) return b
    return GCD(b,a%b)
}

function FindTheLCMByGCD(a,b){
    return a*b/GCD(a,b)
}

console.log(findTheLCM(6,8))