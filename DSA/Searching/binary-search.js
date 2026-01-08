let arr = [10, 20, 20, 40, 40];
let mid = Math.floor(arr.length / 2);
let l = 0;
let h = arr.length-1;
function binarySearch(arr, l , h , mid) {

    if(arr[mid] == 40) return mid;
  if (arr[mid] > 40) h = mid-1;
  else {
    l = mid+1;
  }
  if (l>h) return -1;
  mid = Math.floor((l + h)/2);
  binarySearch(arr, l, h, mid);
}

console.log(binarySearch(arr, l,h, mid))
