function loadingBar(inputPercentage) {
    if (inputPercentage == 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    } else {
        console.log(`${inputPercentage}% [${createBar(inputPercentage)}]`);
        console.log("Still loading...");
    }

    function createBar(inputNumber) {
        let bar = [];
        for (let i = 1; i <= 10; i++) {
            if (i <= (inputNumber/10)) {
                bar.push("%");
            } else {
                bar.push(".");
            }
        }
        return bar.join("");
    }
}
loadingBar(0);