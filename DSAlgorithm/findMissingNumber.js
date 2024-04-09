function findMissingNumber(arr) {
    const n = arr.length + 1; 
        const sumOfIntegers = (n * (n + 1)) / 2;
       for(let i=0; i < arr.length;i++){
        sumOfArray += arr[i];
    }
    const missingNumber =sumOfIntegers-sumOfArray
    console.log(missingNumber)
}
const inputArray = [1, 3, 4, 5, 6, 7, 8, 9, 10];
findMissingNumber(inputArray);


