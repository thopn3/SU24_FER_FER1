// Dinh nghia 1 action: Action nay duoc goi boi nguoi dung, co the xay ra 
// 2 tinh huong (thanh cong, that bai)
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let randomNum = Math.random();
        if(randomNum < 0.5)
            resolve(`Success - ${randomNum}`);
        else
            reject("Error: Random number is greater than 0.5");
    }, 2000);
});

// Dinh nghia 1 ham cho xu ly nhieu request tai cung 1 thoi diem
async function callAction(){
    await myPromise
        .then(success => console.log(success))
        .catch(error=>console.log(error));
}

// Nhieu nguoi se goi ham nay
callAction();

