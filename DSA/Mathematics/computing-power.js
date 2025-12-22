function myPaw(x,n){
    if(n==0) return 1;
        let temp = myPaw(x, Math.floor(n/2))
        temp=temp*temp;
    if(n%2==0) return temp;
    return temp*x;
}

console.log(myPaw(2,3));

