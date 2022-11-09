# 🔆 Neon Lang 🟡
#### v3.0.1-mod

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
2) Execute `node run.js [file you want to run]`

## 📜 Changelog 🔧
#### v3.0.1-mod
- Added modulus (`%`) operator. 
#### v3.0.1-env
- Added more functionality to the `getfenv` function
#### v3.0.1
- Updated to v3.0.1 (from v3.0.0)
- Added `append` function to the fs module.
- Added `\t` operator for strings.
- Added `FSSpam` example which is a performance test.


## ⚓ Abandoned 🚧
*(may come back in the future)*
- Proxies (like the Javascript `new Proxy(<OBJECT>, <PROXY>))` and the Lua `setmetatable(<OBJECT>, <PROXY>)`) 
- ObjectPrototype.defineProperty (`<OBJECT>.defineProperty(<NAME>, <FAKE-ISH PROXY: VALUE>)`)

## 📃 Todo 💹
- [ ] Add support for pointers by v3.0.5

## 🏁 Finished 🔚
- [x] Add modulus/remainder operator (`%`)
- [x] Add more functionality to the `getfenv` function.
- [x] ***(REVERTED)*** UPDATED TO DENO!
- [x] OOP support (still missing `extends` keyword) (Classes)
- [x] (...initial) (objects, array, negated sets, if statements, for/while, variables, scopes)

## 😎 Examples 🧪
- Number interpreter with a lexer and parser (`./examples/NumberInterpreter`)
- Mini-language / small lexer & parser-less language (`./examples/MiniLang`)
- Lambda functions (`./examples/LambdaFunctions`)
- File system spam (`./examples/FSSpam`)
- Example of import system (`./examples/Imports`)