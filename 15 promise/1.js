let delay = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time);
    });
};

delay(2000).then(() => {
    console.log("Success");
})