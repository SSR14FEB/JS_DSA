function findTheLargestElement(...args){
    let max = args[0]
    for(let i =0;i<args.length;i++){
        if(args[max]<args[i]){
            max = i
        }
    }
    return max
}

console.log(findTheLargestElement(1,2,0,4,5)) 

// the time complexity of this function is O(n) and space complexity is O(1)