import Interpreter from './src/interpreter.js';
import Lexer from './src/lexer.js';
import Parser from './src/parser.js';

import Global from './src/core/global.js';
const env = Global(Interpreter).default;

console.time('Execution time');
const interpreter = new Interpreter();
const code = Deno.readTextFileSync(Deno.args[Deno.args.length - 1]);

new Interpreter().eval(new Parser(new Lexer(code)), env);
console.timeEnd('Execution time');