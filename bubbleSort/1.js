
const bubbleSort = (arr) => {
    const { length } = arr
    console.log(length)
    for(let r=0; r<length-1; r++) {
        for(let i=0; i<length-r-1; i++) {
            if(arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]] 
            }
        }
    }
    return arr
}

console.log(bubbleSort([3,2,1]))
console.log(bubbleSort([2,3,1]))