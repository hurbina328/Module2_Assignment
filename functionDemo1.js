var age = 10; //int
var salary = 15.00; //double

//console.log(`The variable type of age is ${typeof age}`);
//console.log(`The variable type of salary is ${typeof salary}`);

//var name = "Johnny Smith";
//console.log(`The variable type of name is ${typeof name}`);

const displayGreetings = function(name, year){
    console.log(`Happy new year ${year} ${name }`)
}

//console.log(`The varuable type of displayGreeting is ${typeof displayGreetings}`);

const displayGreetingsWIthEmoji = function(name, year){
    console.log(`😊😊Happy new year ${year} ${name }😂😂`)
}


const greet = function(name, year, func){
    func(name, year);
}

greet("Sam", 2022, displayGreetingsWIthEmoji);
greet("Sam", 2022, displayGreetings);





// var greet = {};
// if (age > 10){
//     greet = displayGreetings;
// }
// else{
//     greet = displayGreetingsWIthEmoji;
// }
// greet("Sam", 2022);

