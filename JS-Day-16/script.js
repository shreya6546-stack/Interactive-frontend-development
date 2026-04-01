// const pro = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res("promise resloved")
//     }, 3000)
// })
// function getData(){
//     pro.then((res)=>console.log(res));
//     console.log("after promise");
// }
// getData()



// const pro = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res("promise resolved")
//     }, 3000)
// })
// async function getData(){
//     const value = await pro;
//     console.log(value);
// }
// getData();



// const pro = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res("payment done")
//     }, 3000)
// })
// async function getData(){
//     const value = await pro;
//     console.log(value);
//     console.log("dashboard access given")
// }
// getData();




// const pro = new Promise((res, rej) =>{
//     setTimeout(() =>{
//         let payment = true;
//         if (payment)
//             res("payment done");
//         else
//             rej("payment failed")
//     }, 3000)
// })
// async function getData(){
//     try{
//         const value = await pro;
//         console.log(value);
//         console.log("dashboard access given");
//     }catch(error){
//         console.error(error);
//         console.log("access denied");
//     }
// }
// getData();



// async function fetchData(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         return data;
//     }catch(error){
//         console.error(error);
//     }
// }
// fetchData()

// async function getData(){
//     const result = await fetchData();
//     console.log(result);
// }
// getData();



// async function fetchData(city){
//     const API_Key="70b76a185dd654e2625168aa86c9ec29";
//     try{
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`);
//     const data = await response.json();

//     console.log(city);
//     console.log("Temp:",data.main.temp);
//     console.log("Humidity:",data.main.humidity);

//     }catch(error){
//         console.error(error);
//     }
// }
// fetchData("Gurugram")


async function fetchData(city){
    const API_Key="";
    try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`);
    const data = await response.json();

    document.getElementById("result").innerHTML=
    `<h2>${data.name}</h2>
    <p>Temparature:${data.main.temp}</p>
    <p>Humidity:${data.main.humidity}</p>`
   }catch(error){
        console.error(error);
    }
}

function getWeather(){
    const city = document.getElementById("city").value;
    fetchData(city);
}
getWeather()