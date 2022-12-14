
const countSort = (arr) => {
    if(arr.length <= 1) { return arr }
    let hashTable = {}
    let maxValue = arr[0]
    let res = []
    for(let i=0; i<arr.length; i++) {
        if(Object.keys(hashTable).includes(arr[i].toString())) {
            hashTable[arr[i]] = hashTable[arr[i]] + 1
        }else{
            hashTable[arr[i]] = 1
        }
        if(arr[i] > maxValue) {
            maxValue = arr[i]
        }
    }
    for(let i=0; i<=maxValue; i++) {
        if(hashTable[i]) {
            for(let k=0; k<hashTable[i]; k++) {
                res.push(i)
            } 
        }
    }
    console.log(hashTable)
    console.log(maxValue)
    console.log(res)
    return res
}

countSort([11,341,14,241,24,12,341])
countSort([11,11,11])