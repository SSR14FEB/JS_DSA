function isPalindrome(str,start,end){
    if(start>=end) return true
    return ((str[start]==str[end])&&isPalindrome(str,start+1,end-1))
}

console.log(`is string palindrome ${isPalindrome("sonu",0,3)}`)