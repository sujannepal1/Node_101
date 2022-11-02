//modules
// fs and os module 

const os = require('os')

const fs = require('fs')

// Info about user

//      const user = os.userInfo()
//      console.log(user)


console.log('the system uptime is ' + Date.now());

//using fs system
const fs = require('fs')

const class_file = fs.readFileSync('./class.js', 'utf-8')
console.log(class_file);

// const class_file_print = `This is what is known:${class_file}`
// console.log(class_file_print);