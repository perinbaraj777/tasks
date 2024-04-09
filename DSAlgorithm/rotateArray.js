
function rotateArray(k){
    let arr=[3, 8, 9, 2, 5]
    let reversedArray = arr.reverse()
    let end =arr.length - k-1
    let firsthalf= reversedArray.slice(0,end)
    let reversedfirsthalf = firsthalf.reverse();
       let secondhalf = reversedArray.splice(k,arr.length)
    let reversedSecondhalf = secondhalf.reverse();
    
let rotatedarray =reversedfirsthalf.concat(reversedSecondhalf)
console.log(rotatedarray)
}
rotateArray(2)