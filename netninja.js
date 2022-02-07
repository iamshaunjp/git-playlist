function changes(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("great work Ninja");
        }, 1000);
    })
}
console.log(changes());