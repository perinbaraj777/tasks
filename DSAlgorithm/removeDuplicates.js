

function removeDuplicate() {
    const inputArray = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5,6];
    let i = 0;
    for (let j = 1; j < inputArray.length; j++) {
        if (inputArray[i] !== inputArray[j]) {
            // Increment i and update the element at index i
            i++;
            inputArray[i] = inputArray[j];
        }
    }
    console.log("New Length:", i + 1);
    console.log("Array without duplicates:", inputArray.slice(0, i + 1));
}

removeDuplicate();
