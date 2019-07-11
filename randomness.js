const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes",
];

const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert",
];

function randomNumber(){
let number = Math.random();
let nextNumber = number * 21;
let realNumber = Math.floor(nextNumber);
console.log(realNumber);
}

function randomLetter(){
let letter = Math.random();
let realLetter = letter * 26;
let fLetter = Math.floor(realLetter);
let final = alphabet[fLetter];
console.log(final);
}

function randomFood(){
    let food = Math.random();
    let nextFood = food * 6;
    let newFood = Math.floor(nextFood);
    let final2 = foods[newFood];
    console.log(final2);
}

function randomStudent(){
    let student = Math.random();
    let nextStudent = student * 7;
    let newStudent = Math.floor(nextStudent);
    let final3 = students[newStudent];
    console.log(final3);
}



randomNumber();
randomLetter();
randomFood();
randomStudent();