
const insertSort = (arr) => {
    if(arr.length <= 1) return arr
    for(let s=1; s<arr.length; s++) {
        const n = arr[s]
        let i
        for(i=s-1; i>=0; i--) {
            if(arr[i]>n) {
                arr[i+1] = arr[i]
            }else if(arr[i]<=n) {
                break
            }
        }
        arr[i+1] = n
    }
    return arr
}

console.log(insertSort([3,2,1]))
console.log(insertSort([2,3,1]))