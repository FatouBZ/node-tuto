//Global -No Window

//__dirname - path to the directory
//__filename - file name 
//require  - function use modules (collonJS)
//module   -info about current module (file)
//process  -info about env where the program is being executed

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (Only share minimum)
//to import module we use require("")
const names = require('./4-fistModule')
const sayHi = require('./5-secondModule')
const data = require('./6-alternative')
require('./7-operation')
sayHi("Fatou")
sayHi(names.Bintou)
sayHi(names.Zongo)

