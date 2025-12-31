function findTheSecondLargest(...arr){
    let secondLargest = -1;
    let largest = arr[0]
    for(let i = 0;i<=arr.length; i++){
        if(largest<arr[i+1]){
            secondLargest = largest
            largest = arr[i+1]
        }
        if(arr[i]>secondLargest && arr[i]<largest){
           secondLargest = arr[i]
           console.log(secondLargest)
        }
    }
    return secondLargest
}

console.log(`the second largest in arr is ${findTheSecondLargest(1,2,4,3,5)}`)