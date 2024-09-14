//Callback Examples
var callback = () =>{
    console.log("Callback Called")
}

setTimeout(callback,2000);

var print = (name)=>{
    console.log(name)
}

function printName(print,name){
    print(name);
}

printName(print,"Aum")


let name = "Jane Doe";

printName("Elio",(name)=>{
    console.log(name)
})

var countries = ["India","USA","England","Canada"]

countries.map((country)=>{
    console.log(country)
})