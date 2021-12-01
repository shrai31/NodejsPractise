const fs = require('fs');

const path = require('path');

const dirPath = path.join(__dirname, 'crud');
// console.log(dirPath);

const filepath = `${dirPath}/apple.txt`;

// to create the file
// fs.writeFileSync(filepath, 'This is first text file');


//to read the file
// fs.readFile(filepath, 'utf8',(err,item)=>{
//     console.log(item);
// })

// to update the file
// fs.appendFile(filepath, ' and file name is apple.txt', (err)=>{
//     if(!err) console.log("file is updated");
// })

// to rename the file
// fs.rename(filepath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("filename is updated");
// })

//to delete the file
// fs.unlinkSync(`${dirPath}/fruit.txt`)