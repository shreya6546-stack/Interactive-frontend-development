// map method:returns same length of array
let arr=[1,2,3,,5]
let result=arr.map((x)=>x)
console.log(result);


// filter method: returns subset of the original array
let scores=[12,7,22,15,32,6,4,27,11,16];
let highscores=scores.filter((score)=>{
    if(score>=15){
        console.log(score,"pass")
    }
    else{
        console.log(score,"fail")
    }
});


// reduce method:takes two parameter
let numbers=[6,1,2,3,4,5];
// let sum=0;
// for(let i=0; i<numbers.length;i++){
//     sum=sum+numbers[i]
// }
let sum= numbers.reduce((acc, current)=> console.log(current));
// acc=1,index:0
// current:rest of the elements apart from index:0

