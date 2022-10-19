const questions = [
    {
      id: 1,
      Q: "Which one is the type of a javascript file ?",
      answers: [".txt", ".html", ".js", ".css"],
      correct: ".js"
    },
    {
      id: 2,
      Q: "whish one is iterable ?",
      answers: ["object", "array", "number"],
      correct: "array"
    },
    {
      id: 3,
      Q: "OOP is based on ?",
      answers: ["numbers", "functions", "objects", "relation between objects"],
      correct: "relation between objects"
    },
    {
      id: 4,
      Q: "How to declare a variable in Js ?",
      answers: ["a == 1;", "a === 1;", "var a = 1;", "a = 1;"],
      correct: "var a = 1;"
    },
    {
      id:5,
      Q: "What is the output of  { for(let i = 0; i < 5;  i++) console.log(i) } ?",
      answers: ["1, 2, 3, 4, 5", "1, 2, 3, 4", "0, 1, 2, 3, 4, 5", "0, 1, 2, 3, 4"],
      correct: "0, 1, 2, 3, 4"
    },
    {
      id:6,
      Q: "What is the output of {console.log(+'test')} ?",
      answers: ["test", "+test", "undefined", "NaN"],
      correct: "NaN"
    }, 
    {
      id: 7,
      Q: "Whish one is a function expression ?",
      answers: ["function sayHi() { // execute code}", "sayHi() { // execute code}", "const sayHi = ()=> { // execute code}", "sayHi () => { // execute code}"],
      correct: "const sayHi = ()=> { // execute code}"
    },
    {
      id: 8,
      Q: "Whish one is a class notation ?",
      answers: ["class App { // }", "class App () {} "],
      correct: "class App { // }"  
    },
    {
      id: 9,
      Q: "What is the output of { for(let i = 5; i > 0; i--) console.log(i) } ?",
      answers: ["5, 4, 3, 2, 1", "5, 4, 3, 2, 1, 0", "4, 3, 2, 1", "4, 3, 2, 1, 0"],
      correct: "5, 4, 3, 2, 1"
    },
    {
      id: 9,
      Q: "Whish keyword used to define a Function ?",
      answers: ["class", "String", "Function", 'function'],
      correct: "function"
    }
];
export default questions;