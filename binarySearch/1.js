
const binarySearch = (arr, n, start, end) => {
    if(end === start) {
        return -1
    }
    let mid = parseInt((start + end) / 2)
    console.log(mid, n)
    return n === arr[mid] ? mid :
            n > arr[mid] ? binarySearch(arr, n, mid+1, end):
            n < arr[mid] ? binarySearch(arr, n, start, mid):
            undefined
}
console.log(binarySearch([2,2,2,4,5,6,7], 2, 0, 7))