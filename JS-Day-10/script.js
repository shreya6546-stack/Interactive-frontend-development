// const head= document.getElementById("heading");
// console.log(head.innerText)     //it will only show visible text
// console.log(head.textContent)   //it will show all the text including hidden text
// console.log(head.innerHTML)     //it will show all the text with its tag/element


// //DOM modification
// //create a new element and set its content
const newParagraph= document.createElement("p");
newParagraph.textContent = "this is dynamically created paragraph.";
console.log(newParagraph.textContent);

//append the new element to the container
const container= document.getElementById("container");
container.appendChild(newParagraph);


const para = document.querySelector("#container p")
para.remove();

let date = new Date()
console.log(date);

setTimeout(()=>{
    console.log("welcome")
    alert("offer valid till 12 pm")
},5000);
setInterval(()=>{
    console.log("repeat");
},1000);


function handleClick() {
           document.getElementById("output").textContent = "Button clicked!";
       }