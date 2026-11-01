function waitAll() {
    const TimerA = new Promise((resolve) => {
        setTimeout(() => {
            resolve("First");
        }, 1000);
    })
    const TimerB = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Second");
        }, 2000);
    })
    const TimerC = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Third");
        }, 3000);
    })
    return Promise.all([TimerA, TimerB, TimerC]);
}

waitAll().then((result) => {
    console.log(result)
});