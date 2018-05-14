alert("Press F12 and click 'Console' to see the result of JS");

console.log("first");
console.log("song");


//1
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
console.log(myString.replace(/,/g, " "));

//2
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerkat');
console.log("The new array will be 'blow meer capr gira turt'");
console.log(favoriteAnimals);
console.log("The array has a length of: " + favoriteAnimals.length);
favoriteAnimals.splice(2, 1);
console.log(favoriteAnimals);

favoriteAnimals.splice(favoriteAnimals.indexOf("meerkat"), 1);
console.log(favoriteAnimals);
console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf("meerkat"));

//more
//1
function sum(a=1,b=2,c=3){
    let d;
    d=a+b+c;
    console.log(d);
};
sum();

//2
function colorCar(color){
    console.log("a " + color + " car");
}
colorCar("red");

//3
person = new Object();
person.firstname = "Bill";
person.lastname = "Gares";
person.age = 13;
person.eyecolor = "black";

function showperson(){
    console.log(person);
}
showperson();

//4
function vehicleType(color, code){
    let type = ["car", "motobike"];
    console.log("A " + color + " " + type[code-1]);
}
vehicleType("blue", 2);

//5
3 === 3 ? console.log("yes") : console.log("no");

//6
function vehicle(color, code, age){
    let type = ["car", "motobike"];
    age === 0 ? lok = "new" : lok = "used"; 
    console.log("A " + color + " " + lok + " " + type[code-1]);    
}
vehicle("blue", 2, 5);

//7
var list = ["motorbike", "caravan", "bike"];

//8
console.log(list[2]);

//9
function vehicle_(color, code, age, type){
    age === 1 ? lok = "new" : lok = "used"; 
    console.log("A " + color + " " + lok + " " + type[code-1]);    
}
vehicle_("green", 3, 1, list);

//10
var word = "";
function init_(){
    for (i in list) {
        word += (" " + list[i] + ",");
        console.log(list.length);
        if (i == (list.length-2)) {
            word = word.substring(0, word.length-1);
            word = word + " and";
        }
    }
    word = word.substring(0, word.length-1);
    word = word + ".";
}
init_();
console.log("Amazing Joe's Garage, we service" + word);

//11
list.push("car");
var word = "";
init_();
console.log("Amazing Joe's Garage, we service" + word);

//12
dog = new Object();

//13
teachers = new Object();
teachers.English = "Bill";
teachers.Chinese = "Veney";
teachers.Japanese = "Bob";
console.log(teachers);

//14
teachers.Franch = "Jon";
console.log(teachers);

//15
let x = [1,2,3];
let y = [1,2,3];
let z = y;

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);

//16
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

o2 = {foo: 'bar-changing o2'};
console.log(o3);
o1 = {foo: 'bar-changing o1'};
console.log(o3);

//17
let bar = 42;
console.log(typeof bar);
console.log(typeof typeof bar);

var x_ = "6";
console.log(typeof x_);
console.log(typeof parseInt(x_));
