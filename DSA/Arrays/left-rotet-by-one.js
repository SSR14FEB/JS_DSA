function fun(arr){
    if(arr.length==0) return arr
    arr.push(arr[0])
    arr.shift(arr[0])
    return arr
}
console.log(fun([1]))