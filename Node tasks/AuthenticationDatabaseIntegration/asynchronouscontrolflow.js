
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100);
            resolve(randomNumber);
        }, Math.random() * 2000); 
    });
}

function fetchDataFromDB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = ['John', 'Jane', 'Alice'];
            resolve(data);
        }, Math.random() * 2000); 
    });
}

async function performParallelOperations() {
    try {
        const [randomNumber, dataFromDB] = await Promise.all([
            getRandomNumber(),
            fetchDataFromDB()
        ]);
        console.log('Random number:', randomNumber);
        console.log('Data from DB:', dataFromDB);
    } catch (error) {
        console.error('Error in parallel operations:', error);
    }
}

// Function to perform multiple operations sequentially
async function performSequentialOperations() {
    try {
        const randomNumber = await getRandomNumber();
        console.log('Random number:', randomNumber);

        const dataFromDB = await fetchDataFromDB();
        console.log('Data from DB:', dataFromDB);
    } catch (error) {
        console.error('Error in sequential operations:', error);
    }
}

performParallelOperations();
performSequentialOperations();
