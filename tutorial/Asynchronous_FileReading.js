//using fs system
const fs = require('fs');

// class_file = fs.readFile('./class.js', 'utf-8', readingFile)

// function readingFile(error, data) {
//     console.log(error)
//     console.log(data)
// }
// console.log("hi")
// console.log(class_file);

//non-blocking file writing 


fs.readFile('./tutorial.js', 'utf-8', (err, data1) => {
    console.log(data1);
    fs.readFile(`./${data1}.js`, 'utf-8', (err, data2) => {

        console.log(data2);
    });
});
console.log("will read file")

///////////////////////////////
// comment out tutorial.js/////
///////////////////////////////