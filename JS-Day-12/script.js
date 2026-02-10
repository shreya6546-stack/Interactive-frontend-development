document.getElementById("myInput").
addEventListener("change",()=>{
    document.getElementById("output").textContent="Change detected!";
})

const nameInput=document.getElementById("myInput");
const courseInput=document.getElementById("course");
const btn=document.getElementById("myForm");
const output=document.getElementById("output");
FormData.addEventListener("submit",(event)=>{
    event.preventDefault();
    event.defaultPrevented;
    const name=nameInput.ariaValueMax;
    const course=courseInput.ariaValueMax;
    console.log(name, course);
    output.textContent=name+" "+course;
});