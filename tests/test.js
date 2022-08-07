import { assertStrictEquals } from "https://deno.land/std@0.151.0/testing/asserts.ts";

import { createRequire } from "https://deno.land/std@0.151.0/node/module.ts";
const require = createRequire(import.meta.url);

import Interpreter from '../src/interpreter.js';
import Lexer from '../src/lexer.js';
import Parser from '../src/parser.js';

import Global from '../src/core/global.js';
const env = Global(Interpreter);

const interpreter = new Interpreter();

function test(code, expec) {
    const ast = new Parser(new Lexer(code));
    assertStrictEquals(interpreter.eval(ast, env.create()), expec);
}

const tests = [
    require('./numbers'),
    require('./math-operations'),
    require('./variables'),
    require('./native-functions'),
    require('./user-functions'),
    require('./variable-assign'),
    require('./linked'),
	require('./objects'),
	require('./object-set'),
	require('./arrays'),
	require('./conditional'),
	require('./loops'),
	require('./assignments'),
	require('./string'),
	require('./nested-functions'),
	require('./unary'),
	require('./object-test'),
	require('./constants'),
	require('./module-test'),
	require('./classes'),
	require('./function-return'),
	require('./imports'),
	require('./ternary'),
	require('./callbacks'),
	require('./switch'),
	require('./try-catch'),
	require('./with-statement'),
	require('./throw-err'),
	require('./typeof'),
];

const manualTests = [
    23
];

for (let t of tests) {
    t(test);
}
for (let t of manualTests) {
    console.log('Manual test,', interpreter.eval(t));
}

console.log('All assertions succeeded.');