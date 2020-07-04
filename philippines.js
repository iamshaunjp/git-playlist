const thanks = 'Thank you shaun!';
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Resolve');
    } else {
        reject('Reject');
    }
});

promise.then(e => console.log(e)).catch(e => console.log(e));