function pro(){
    return new Promise((resolve, reject) =>{
        let payment = "true";
        if (payment === "true"){
            resolve("dashboard access")
        }
        else{
            reject()
        }
    })
}
pro()
.then((res) => console.log(res))
.catch(() => console.log("access denied"))

