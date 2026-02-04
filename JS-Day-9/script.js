const query= document.querySelector("#content p");
console.log(query,"query");
query.textContent="fdbf gghyfe ghnbf"

// querySelectorAll
const query2 = document.querySelectorAll("p");
console.log(query2, "query");
for(let i=0; i<query2.length; i++){
    query2[i].textContent="asdjhf vhdjuherf sjfuhdbvshj"
}


const query3= document.querySelector("p")
console.log(query3, "query");
for(let i=0; query3.length; i++){
    if(i%2==0){
        query[i].style.color="blue"
    }
    else{
        para[i].style.color="green"
    }
}
p[]