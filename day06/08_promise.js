/**
 * Promise - object  --> represents the eventual completion (or failure) of an async operation
 *
 * getData(function(a){
 *  getData1(a, function(b){
 *      getData2(b, function(c){
 *              Do something
 * })
 * })
 *
 * })
 *
 *
 * Promise - 3 states
 * 1. Pending - initial state of a Promise
 * 2. Fulfilled - success
 * 3. Rejected - failed
 *
 *
 */
function makeCoffee() {
    return new Promise(function (resolve, reject) {
        console.log("Coffee is being prepared");
        //callback function --> simulating the time it takes to make coffee
        setTimeout(function () {
            var coffeeReady = true;
            if (coffeeReady) {
                resolve("Coffee is ready");
            }
            else {
                reject("Failed to make coffee");
            }
        }, 3000);
    });
}
//using the promise
makeCoffee().then(function (successMessage) {
    console.log(successMessage);
})
    .catch(function (errorMessage) {
    console.error(errorMessage);
});
//async  await
