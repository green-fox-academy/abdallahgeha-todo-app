'use strict';


const fs = require('fs'); // for writing into files (don't forget to use npm i @types/node)


const args: string[] = process.argv; //for using command line arguments. Don't forget that it is a string array w/ atleast 2 elements already!!!
let printUsage = fs.readFileSync('./readUsage.txt', 'utf-8');
let listTasks = fs.readFileSync('./listTasks.txt', 'utf-8');


//console.log(printUsage)

let mainProcess = () => {

  if (args.length == 2) {
    console.log(printUsage);
  } else if (args[2] == '-l') {
    console.log('$ todo -l \r\n')
    if (listTasks == '') {
      console.log('No todos for today! :)')
    } else {
      let listNumberedTasks = listTasks.split('\r\n')
      for (let i: number = 1; i <= listNumberedTasks.length; i++) {
        console.log(i + ' - ' + listNumberedTasks[i - 1])
      }
    }

  } else if (args[2] == '-a') {
    fs.appendFileSync('./listTasks.txt', ('\r\n' + args[3]))
  } else if (args[2] == '-r') {

    let indexDelet = parseInt(args[3]) - 1
    let listNumberedTasks = listTasks.split('\r\n')
    if (listNumberedTasks.length >= 2) {
      console.log('Deleting [ ' + listNumberedTasks[indexDelet] + " ]")
      listNumberedTasks.splice(indexDelet, 1)
      listTasks = listNumberedTasks.join('\r\n')
      fs.writeFileSync('./listTasks.txt', listTasks)
    }
  }
}
mainProcess();