function selectionSort(arr){
    let n = arr.length;
    for(let i = 0; i < n-1; i++){
        let min=i;
        for(let j = i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
            [arr[min],arr[i]]=[arr[i],arr[min]]
        }
    }
    return arr
}
console.log(selectionSort([10,5,8,20,2]))