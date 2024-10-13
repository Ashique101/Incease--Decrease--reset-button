/*console.log("Hello");
console.log(`I like my code `);
window.alert("Hello World");

document.getElementById("myH1").textContent = "Hello";
document.getElementById("myP").textContent = "I like my code";
let x;

x=100;
console.log(x);
let age=21;
console.log(age);
let price=10.99;
let gpa=3.5;
console.log(price);
console.log(gpa);
console.log(`you are ${age} years old`);
console.log(`you are ${age} years old and your gpa is ${gpa}`);
console.log(`The price is $${price}`);

let fristName="Ashique";
let favouriteFood="pizza";

console.log(typeof fristName);
console.log(`Your name is ${fristName}`);
console.log(`Your favourite food is ${favouriteFood}`);

let email="ashique@gmail.com";
console.log(`your email id is ${email}`);



let online=true;
let forSale=false;
let isStudent=true;

console.log(`Ashique is online : ${online}`);
console.log(`Is this car is for sale : ${forSale}`);
console.log(`Is Ashique a student : ${isStudent}`);


let fullName="Ashique Iqbal";
let age=21;
let student=true;

document.getElementById("p1").textContent=`your name is ${fullName}`;
document.getElementById("p2").textContent=`you are ${age} years old`;
document.getElementById("p3").textContent=`you are a student : ${student}`;
*/

//**=power*/

//let student=50;

/*
student = student + 10;
student=student*2;
student=student**2;
student=student/2;
console.log(student);

student+=5;
console.log(student);

student-=5; 
console.log(student);

student*=2;
console.log(student);

student/=2;
console.log(student);

student%=2;
console.log(`we have ${student} students in our class`);

operation precedence
  1. parenthesis()
  2. exponentiation
  3. multiplication and division & modulo
  4. addition and subtraction





let x=1+2*3+4**2;
console.log(x);

let y=12%5+8/2;
console.log(y);

let z=6/2**(2+5);
console.log(z);
*/

//1. easy way to except username ;
/*
 username=window.prompt("Enter your name");
 console.log(username);
 */
 //2. professional way to except username ;
 
 /*
 let username;
 document.getElementById("submit").onclick = function() {
     username = document.getElementById("mytext").value;
     document.getElementById("myH1").textContent = `Hello ${username} Welcome to our site ...`;
 };
 */
/*
 let age=window.prompt("Enter your age ");
 age=Number(age); // if you don't use Number() it will be string
 age=age+1
 console.log(age , typeof age);

*/
/*
let x="pizza";
let y="pizza";
let z="pizza";

x=Number(x);
y=String(y);
z=Boolean(z);

console.log(x , typeof x);
console.log(y , typeof y);
console.log(z , typeof z);
*/
/*

let pi=3.1416;
let radious;
let circumference;

radious = window.prompt("Enter the radious of the circle : ");
radious = Number(radious);
circumference = 2*pi*radious;
//console.log(`The circumference of the circle is : ${circumference}`);
console.log(circumference);
*/
// from html
/*
let pi = 3.1416;
let radious;
let circumference;

document.getElementById("mysubmit").onclick = function() {
    // Get the value from the input field
    radious = document.getElementById("mytext").value;
    // Convert the value to a number
    radious = Number(radious);
    // Calculate the circumference
    circumference = 2 * pi * radious;
    // Display the result
    document.getElementById("myh3").textContent = `The circumference of the circle is: ${circumference} cm`;
};

*/

const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const countLabel = document.getElementById("countLabel");

let count = 0;

increase.onclick = function() {
    count++;
    countLabel.textContent = count;
};

decrease.onclick = function() {
    count--;
    countLabel.textContent = count;
};

reset.onclick = function() {
    count = 0;
    countLabel.textContent = count;
};
