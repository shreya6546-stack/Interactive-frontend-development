// string methods
// slice(start,end)
let str = "JavaScript is fun!";
let sliced = str.slice(0, 10);
console.log(sliced);

// substring(start,end)
let st= "JavaScript is amazing!";
let sub = st.substring(11, 17);
console.log(sub); 

// indexOf()
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const indexOfFirst = paragraph.indexOf("dog");
console.log(indexOfFirst);

// replace(search,replacement)
let sentence = "I love JavaScript. JavaScript is powerful.";
let newSentence = sentence.replace("JavaScript", "Node.js");
console.log(newSentence);

// concat(string1,string2)
let firstName = "John";
let lastName = "Doe";
// let fullName = firstName.concat(" ", lastName);
// console.log(fullName);

// string literals
let fullname= `${firstName} this is my first name ${lastName}`
console.log(fullname);

let university="KR Mangalam";
let program="BCA AI/DS"
console.log(`My name is S.P Archarya and im pursuing ${program} from ${university}`);

// spread operator
let arr=[1,2,3]
let arr2=[4,5,6]
let newarray=[...arr,...arr2];
console.log(newarray)