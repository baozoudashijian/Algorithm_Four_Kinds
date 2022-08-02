
const selectSort = (arr) => {
    if(arr.length <= 1) { return arr }

    for(let i=0; i<arr.length-1; i++) {
        let minIndex = i
        for(let k=i+1; k<arr.length; k++) {
            if(arr[k] < arr[i]) {
                console.log(k)
                minIndex = k
            }
        }
        console.log(i, minIndex);
        [arr[i], arr[minIndex]] =  [arr[minIndex], arr[i]]
    }
    return arr
}

console.log(selectSort([3,2,1]))
// [1, 2, 3]
// console.log(selectSort([1,1,1]))