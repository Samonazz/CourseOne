const prompt = require("prompt-sync")();

let op = prompt(" select one option:  + - * / ");

if(op == '+' || op == '-' || op == '*' || op == '/' ){
    let n1 = Number(prompt("Number :   "));
    let n2 = Number(prompt("Number :   "));
    let result;
    if(op == '+'){
        result = n1 + n2; 
        console.log(`result is ${result}`);
        console.log(`Result = ${n1 + n2}`);
        console.log(`${n1} + ${n2} = ${result}`);
    }
    else if(op == '-'){
        result = n1 - n2; 
        console.log(`${n1} - ${n2} = ${result}`)
    }
    else if(op == '*'){
        result = n1 * n2; 
        console.log(`${n1} * ${n2} = ${result}`)
    }
    else if(op == '/'){
        result = n1 / n2; 
        console.log(`${n1} / ${n2} = ${result}`)
    }    
}
else{
    console.log("Wrong option");
}

    








// store a number in a variable
// check whether number is positive , negative or Zero

let num = 45;

if(num > 0){
    console.log(`${num}  is a positive number`);
}
else if(num < 0){
    console.log(`${num}  is a negative number`);
}
else {
    console.log("It's ZERO!");
}
//////////////////////////////////////////////
let name_1 = "Nalini".toUpperCase();
let name_2 = 'nalini'.toLowerCase();

if(name_1 == name_2){
    console.log(name_1);
    console.log(name_2);
    console.log("Same string");
}
else{
    console.log(name_2);
    console.log("not a same string");
}

///////////////////////////////////////
let value = 56;
if(value % 2 == 0){
    console.log(`${value} is an even number`);
}   
else {
    console.log(`${value} is an odd number`);
}
    


//////////////////////////////////////////////////
let number = 100;

if(number>100){
    console.log("This number is greater than 100");
    console.log(number);
}
else if(number < 100){

    console.log("This number is smaller than 100");
    console.log(number);
}
else{
    console.log("This number is 100");
    console.log(number);
}
    