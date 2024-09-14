//Promise Example
function makePromise(a){

    var p = new Promise((resolve, reject) => {
        if (a > 10){
            resolve({status : true, message: 'Promise resolved'})
        }
        else{
        reject({status : false, message: 'Promise rejected'})
        }
    });
    return p;
}
// Promise Example 1
console.log("Promise Example 1")

makePromise(11).then((message) =>{
    console.log(message.status + ": " + message.message);
}, (message) =>{
    console.log(message.status+ ": " + message.message);
})


// Promise Example 2
console.log("Promise Example 2")

makePromise(8).then((message) => {
    console.log(message.status+ ": " + message.message);
}).catch((message)=>{
    console.log(message.status+ ": " + message.message);
}).finally(()=>{
    console.log("Finally Block.")
})

console.log("Promise Example 3")
makePromise(10).then((message) =>{
    console.log(message)
    return message;
}).then((message) =>{
    console.log(message.status)
    console.log(message.message)
}).catch((message) =>{
    console.log(message.message)
}).finally(()=>{
    console.log("Finally Block.")
})

// Promise Example 4
console.log("Promise Example 4")
Promise.all([makePromise(10), makePromise(20), makePromise(30)]).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("Finally Block")
})