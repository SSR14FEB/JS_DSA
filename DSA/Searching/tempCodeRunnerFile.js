let arr = [10, 20, 30, 40, 50];
let mid = Math.floor(arr.length / 2);
function binarySearch(arr, l = 0, h = arr.length, mid) {
  if (arr[mid] == 20) return mid;
  if (arr[mid] > 20) l = mid;
  else {
    h = mid;
  }
  if (l === h) return -1;
  mid = Math.floor(l + h) / 2;
  binarySearch(arr, l, h, mid);
}

console.log(binarySearch(arr, 0, 0, Math.floor(l + h) / 2));
