// split
let sentence = "I,am,a,comma,separated,sentence";
let words = sentence.split(","); 
console.log(words);

// count the occurence of "r" in the given string let str="tu meri mein tera mein tera tu meri"
let str="tu meri mein tera mein tera tu meri"
console.log(str.split("r").length-1)

// first class function
function test(){
    console.log("test")
    return function test2(){
        console.log("test2")
    }
}
test()

function test(){
    console.log("test")
    return function test2(){
        console.log("test2")
    }
}
let value=test()
value();