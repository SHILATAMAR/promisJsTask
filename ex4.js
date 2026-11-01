function raceTimers() {

    const TimerA = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Timer A finished");
        }, 2000);
    })
    const TimerB = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Timer B finished");
        }, 3000);
    })
    return Promise.race([TimerA, TimerB]);
}

raceTimers().then((result) => {
    console.log(result)
});