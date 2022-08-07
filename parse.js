import Lexer from './src/lexer.js';
import Parser from './src/parser.js';

const code = Deno.readTextFileSync(Deno.args[Deno.args.length - 1]);
console.time('Execution time');
console.log(JSON.stringify(new Parser(new Lexer(code)), null, 4));
console.timeEnd('Execution time');