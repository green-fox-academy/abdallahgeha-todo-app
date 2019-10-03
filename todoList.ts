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
      let parts = listNumberedTasks.map(e => e.split(','))
      parts.forEach((e,i) => console.log((i+1) , ' - ' + e[0]))
    }

  } else if (args[2] == '-a') {
    if (!args[3]){
      console.log('Unable to add: no task provided')
    }else{
    fs.appendFileSync('./listTasks.txt', ('\r\n' + args[3]))
    }
  } else if (args[2] == '-r') {
    let listNumberedTasks = listTasks.split('\r\n')
    let indexDelet = parseInt(args[3]) - 1
    //console.log(listNumberedTasks.length)
    if (!args[3]){
      console.log('Unable to remove: no index provided')
    }else if (indexDelet > listNumberedTasks.length){
      console.log('Unable to remove: index is out of bound')
    }else if (!indexDelet ){
      console.log('Unable to remove: index is not a number')
    }else{
      if (listNumberedTasks.length >= 2) {
        console.log('Deleting [ ' + listNumberedTasks[indexDelet] + " ]")
        listNumberedTasks.splice(indexDelet, 1)
        listTasks = listNumberedTasks.join('\r\n')
        fs.writeFileSync('./listTasks.txt', listTasks)
      }
    }
  }else if (args[2] == '-c') {
    let indexCheck = parseInt(args[3]) - 1
    let listNumberedTasks = listTasks.split('\r\n')
    let parts = listNumberedTasks.map(e => e.split(','))
    parts[indexCheck][1] = 'd';
    let newParts = parts.map(e => e.join(','))
    let newLines =newParts.join('\r\n')
    fs.writeFileSync('./listTasks.txt', newLines)

    console.log(newLines)
    // let newParts = parts.join(',')
    // let newListNumbereredTasks
    // listNumberedTasks
    // parts.forEach((e,i) => console.log((i+1) , ' - ' + e[0]))
  }else{
    console.log('Unsupported argument')
    console.log(printUsage);
  }
}
mainProcess();