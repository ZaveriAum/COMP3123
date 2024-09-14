//Async/Await Examples
async function getName(status, name){
    if(status){
        return Promise.resolve(name);
    }
    return Promise.resolve('I have rejected the promise')
    // return "Aum Zaveri"
}

// getName(true, "Aum").then((name)=>{
//     console.log(name)
// }).catch((error)=>{
//     console.log(error)
// })

async function getNameAsync(status, name){
    try{
        console.log('Before await')
        const res = await getName(status, name);
        console.log(res);
        console.log('After await')
    }catch(error){
        console.log("Error" + error)
    }
    console.log("After try and catch")
}

console.log("Before calling getNameAsync")
getNameAsync(true, "Aum")
console.log("After async getNameAsync")

async function getUserAndPost(userId){
    var user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    var userJson = await user.json();
    console.log(userJson)

    var posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userJson.id}`);
    var postsJson = await posts.json();
    console.log(postsJson);
}

getUserAndPost(1)