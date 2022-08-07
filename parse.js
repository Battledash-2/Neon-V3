import Lexer from './src/lexer.js';
import Parser from './src/parser.js';

console.time('Execution time');
const code = Deno.readTextFileSync(Deno.args[Deno.args.length - 1]);
console.log(JSON.stringify(new Parser(new Lexer(code)), null, 4));
console.timeEnd('Execution time');