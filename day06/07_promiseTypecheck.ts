function prepareCoffee(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        console.log("Starting coffee making process...");

       
        setTimeout(() => {
            const coffeeReady: boolean = true; 

            if (coffeeReady) {
                resolve("Coffee is ready!");
            } else {
                reject("Failed to make coffee.");
            }
        }, 3000);
    });
}

// Using the Promise
prepareCoffee()
    .then((successMessage: string) => {
        console.log(successMessage);
    })
    .catch((errorMessage: string) => {
        console.error(errorMessage);
    });
