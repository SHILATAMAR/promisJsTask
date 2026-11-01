function delayedGreet(name, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello, ${name}!`);
        }, delay);
    });
}

delayedGreet("shilat", 2000).then((result) => {
    console.log(result);
})
