'use strict';


const fs = require('fs'); // for writing into files (don't forget to use npm i @types/node)


const args: string[] = process.argv; //for using command line arguments. Don't forget that it is a string array w/ atleast 2 elements already!!!
let printUsage = fs.readFileSync('./readUsage.txt', 'utf-8');

console.log(printUsage)
/*
let mainProcess = () => {

  if (args.length == 2) {
    console.log(printUsage);
  } else if (args[2] == '-l'){
    console.log('i am listing all the todos')
  } else {
    console.log('this is the error handling');
  }
}
mainProcess();*/