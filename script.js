//regular function//
function  sum(){
            let a=10;
            let b=20;
            console.log(a+b)
        }
sum()

//Arrow function//
const sum=()=>{
    console.log(a+b)
}
sum(5,10)

//callback function//
//callback()=demo()//
function sample(callback){
    console.log("sample");
    callback()
}

function demo(){
    console.log("demo")
}
sample(demo)
//callback function: in callback function we can pass a function as an argument in another funtion and call it simultaneously.//


