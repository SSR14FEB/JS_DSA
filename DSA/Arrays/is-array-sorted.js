function isArraySorted(...arr){
    for(let i =0;i<arr.length;i++){
        if(arr[i]>arr[i+1]) return false; 
    }
    return true;
}

console.log(isArraySorted(1,2,3,4,5,9,10))
// time complexity is O(n)