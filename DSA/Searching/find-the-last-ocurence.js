let l = 0;
let h = 0;
let arr = [1, 2, 3, 4, 20, 20, 30, 30];
let mid = Math.floor(arr.length / 2);

function fun(arr, l, h, mid) {
  if (arr[mid] < 30) {
    l = mid + 1;
  }
  if (arr[mid] > 30) {
    h = mid - 1;
  }
  if (l > h) return 0;
  if (arr[mid] == 30) {
    if (arr[mid + 1] !== 30) {
      return mid;
    } else {
      l = mid + 1;
    }
  }
  mid = Math.floor((l + h) / 2);
  return fun(arr, l, h, mid);
}

console.log(fun(arr, (l = 0), (h = arr.length - 1), mid));
