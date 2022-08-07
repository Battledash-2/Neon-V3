const lexer = require('../../src/lexer');
const parser = require('../../src/parser');
const interpreter = require('../../src/interpreter');

const fs = require('fs');
let fc = String(fs.readFileSync('./lambda.neo'));

console.time("Execution time");

let lexed = new lexer(fc);
let parsed = new parser(lexed);

let runner = new interpreter();

runner.eval(parsed);

console.timeEnd("Execution time");