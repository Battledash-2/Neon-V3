# 🔆 Neon Lang 🟡
#### V3.0.1

# ***Neon has been updated to use Deno rather than Node.js! This means you can compile Neon to reach full potential!***

## What is Neon? (ℹ)
### Neon is a public and open source language (under the MIT license ©).

## 📩 Installation 📉
### To install Neon:
1) First, run `git clone https://github.com/Battledash-2/Neon` to clone the source code
2) Second, create a Javascript file named `run.js`
3) In the file, require the lexer, parser and interpreter in `/src`.
4) To initiate, use `new Interpreter().eval(new Parser(new Lexer('ANY CODE HERE')));`

### Alternatively:
1) Clone the source code (like shown above)
2) Run `node . <MODE: [-f: File, -c: Console, Default: -c]> <MODE==FILE?FNAME: [-t: Show Exec Time]>`

## 📜 Changelog 🔧
- Updated to v3.0.1 (from v3.0.0)
- Added `append` function to the fs module.
- Added `\t` operator for strings.
- Added `FSSpam` example which is a performance test.

## 📃 Todo 💹
- [ ] Add modulus/remainder operator (%)
- [ ] Figure out issues with the test file
- [ ] Add more functionality to the `getfenv` function.

## ⚓ Abandoned 🚧
- Proxies (like the Javascript `new Proxy(<OBJECT>, <PROXY>))` and the Lua `setmetatable(<OBJECT>, <PROXY>)`) 
- ObjectPrototype.defineProperty (`<OBJECT>.defineProperty(<NAME>, <FAKE-ISH PROXY: VALUE>)`)

## 🏁 Finished 🔚
- [x] ***UPDATED TO DENO!***
- [x] OOP support (still missing `extends` keyword) (Classes)
- [x] (...initial) (objects, array, negated sets, if statements, for/while, variables, scopes)

## 😎 Examples 🧪
- Number interpreter with a lexer and parser (`./examples/NumberInterpreter`)
- Mini-language / small lexer & parser-less language (`./examples/MiniLang`)
- Lambda functions (`./examples/LambdaFunctions`)