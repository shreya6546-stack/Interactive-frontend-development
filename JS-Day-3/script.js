//Push
let fruits=["apple","banana"];
let newlength=fruits.push["cherry"]
console.log(newlength);

//Pop
let fruit=["apple","banana","cherry"]
let removed= fruits.pop();
console.log(removed);

// reverse the array using push and pop method
let arr=[1,2,3,4,5,6]
let res=[]
while(arr.length>0){
    res.push(arr.pop());
}
console.log(res)

// remove all negative numbers
let array=[3,5,-7,8,-1]
let posint=[]
while(array.length>0){
    let val=array.shift();
    if(val>=0){
        posint.push(val);
    }
}
console.log(posint);


// check if array is palindrome or not
function palindrome(){
    let arr=[1,2,3,2,1]
    let temp=[]
    let original=[]
    // let origin=[...arr];

    for(let i=0; i<arr,length; i++){
        original.push(arr[i])
    }
    console.log(original);
    while(arr.length>0){
        temp.push(arr.pop());
    }
    for (let i=0; i<original.length; i++){
        if (original[i] !== temp[i])
            return "not a palindrome";
    }
    return "yes a palindrome";
}
console.log(palindrome())