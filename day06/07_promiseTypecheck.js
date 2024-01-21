function prepareCoffee() {
    return new Promise(function (resolve, reject) {
        console.log("Starting coffee making process...");
        setTimeout(function () {
            var coffeeReady = true;
            if (coffeeReady) {
                resolve("Coffee is ready!");
            }
            else {
                reject("Failed to make coffee.");
            }
        }, 3000);
    });
}
// Using the Promise
prepareCoffee()
    .then(function (successMessage) {
    console.log(successMessage);
})
    .catch(function (errorMessage) {
    console.error(errorMessage);
});
