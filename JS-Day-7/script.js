let user={
    name:"shreya",
    address:"gurugram",
    mobileno:"5678375923",
    favcolor:["red","blue","green"]
}
console.log(user);
console.log(user.name, user.mobileno, user.favcolor[0]);
// console.log("my name is "+user.name+". my fav color is "+user.favcolor[0]")
// string literal
console.log(`my name is ${user.name}.my fav color is ${user.favcolor[0]}`);    


// object methods
// object.keys(variables name)
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

let user2={
    name:"shreya",
    address:{
        city:"gurugram",
        state:"haryana",
    },
    mobileno:"5678375923",
    favcolor:["red","blue","green"]
}
console.log(user2.name, user2.mobileno, user2.favcolor[0], user2.address.city);


let user3={
    name:"shreya",
    address:{
        city:"gurugram",
        state:"haryana",
    },
    mobileno:"5678375923",
    favcolor:["red","blue","green"],
    demo:function(){
        return "demo function"
    }
}
console.log(user3.name, user3.mobileno, user3.favcolor[0], user3.address.city, user3.demo());


const car ={
    make:"mahindra",
    model:"thar"
};
// object.freeze(car);
Object.seal(car);
car.model="XUV700"
car.color="zblack";
console.log(car);
