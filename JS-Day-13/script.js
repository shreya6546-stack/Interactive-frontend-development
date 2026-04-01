// console.log("start...")
// function myFunction(){
//     setTimeout(()=>{
//         console.log("myFunction timeout...")
//     }, 2000);
// }
// myFunction();
// console.log("end...")


console.log("start...")
function myFunction(cb){
    setTimeout(()=>{
        cb("hello world!");
    }, 2000);
}
myFunction((data)=>{
    console.log(data);
});
console.log("end...");

// get video list, get single video, get login 

