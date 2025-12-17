function palindrome(n,rev=0){
    if(n==0) return rev
    return palindrome(Math.floor(n/10),rev*10+(n%10))
}

function IsItPalindrome(n){
    return (n==palindrome(n))
}

console.log(`Is it palindrome ${IsItPalindrome(666)}`)