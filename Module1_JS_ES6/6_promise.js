// Dinh nghia 1 doi tuong Promise de quan ly ket qua cua 1 action nao do
let myPromise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let randomNum = Math.random();
        if(randomNum < 0.5)
            resolve(`Success1 - ${randomNum}`);
        else
            reject("Error1: Random number is greater than 0.5");
    }, 2000);
});

let myPromise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let randomNum = Math.random();
        if(randomNum < 0.5)
            resolve(`Success2 - ${randomNum}`);
        else
            reject("Error2: Random number is greater than 0.5");
    }, 2000);
});

// Dieu khien doi tuong Promise
Promise.all([myPromise1, myPromise2])
    .then(result=>console.log(result))
    .catch(err => console.log(err));