function randomOperation() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            resolve("Success!");
        } else {
            reject("Failure!");  
        }
    });
}

randomOperation().then((result) => {
    console.log(result);
})
    .catch((error) => {
        console.log(error);
    })