// function moveAllZero(arr,s=0,e=arr.length-1){
//     console.log(s,e)
//     if(s>=e){
//        return arr
//     }
//     if(arr[s]==0){
//         arr[s] = arr[e];
//         arr[e] = 0;
//     }
//     return moveAllZero(arr,arr[s]!=0?s=s+1:s,arr[e]==0?e=e-1:e)
// }

console.log(moveAllZero([1, 1, 0, 3, 4, 0, 2]));
// this is un ordered

function moveAllZero(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      // [arr[i],arr[count]] = [arr[count],arr[i]]
      let temp = arr[i];
      arr[i] = arr[count];
      arr[count] = temp;
      count++;
    }
  }
  return arr;
} 
