//here is 1
alert("this is a new sentence");

console.log("Hello world!");
console.log("你好，世界");

//here is 2
console.log('I\'m awesome');

//here is 3
var x;
console.log('the value of my variable x will be: 20');
console.log(x);
x = 15;
console.log('the value of my variable x will be: 15');
console.log(x);

//here is 4
var y;
y = "Hello";
console.log('the value of my variable y will be: Hello');
console.log(y);
y = "World";
console.log('the value of my variable y will be: World');
console.log(y);

//here is 5
var z = 7.25;
console.log(z);
var a = Math.round(z);
console.log(a);
if (a > z)
    {
        console.log(a);
    }
if (a < z)
    {
        console.log(z);
    }
else 
    {
        console.log('a == z');
    }

//here is 6
var arr = [];
console.log('This arrary valus will be: [1, 2, 3]');
console.log(arr);
var animals = ['dog', 'cat', 'rabbit'];
console.log(animals);
animals.push('baby pig');
console.log(animals);

//here is 7
let myString = "this is a test";
console.log(myString);
console.log(myString.length);

//here is 8
let foo = 3;
console.log('The value of my variable foo is: ' + foo);
let aoo = 5.6;
console.log('The value of my variable aoo is: ' + aoo);
let boo = "Hi";
console.log('The value of my variable boo is: ' + boo);
let coo = true;
console.log('The value of my variable coo is: ' + coo);

console.log("I think the type of foo is number");
console.log(typeof(foo));

if(typeof(foo) == typeof(aoo)) {
    console.log('SAME TYPE');
}
else {
    console.log(typeof(foo) + '!==' + typeof(aoo));
}

if(typeof(boo) == typeof(coo)) {
    console.log('SAME TYPE');
}
else {
    console.log(typeof(boo) + '!==' + typeof(coo));
}

//here is 9
var x = 7;
console.log('this is original x = ' + x);
x = x % 3;
console.log('x % 3 = ' + x);
var y = 9;
y = y % 5;
console.log('9 % 5 = ' + y);

//here is 10
var muarr = [15, "he", true, [1, 2]];
if (6/0 === 10/0) {
    console.log('I can compare infinites');
    console.log('the result is ' + (6/0 === 10/0));
}
else if (6/0 !== 10/0) {
    console.log('I can compare infinites, yes');
    console.log('the result is ' + (6/0 === 10/0));
}
else {
    console.log('I can not');
}
