#! /usr/bin/env node
//shabang    
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold("========>>>>>welcome TO-DO-LIST<<<<<========"));
let toDolist = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([{
            name: "Task",
            type: "input",
            message: (chalk.magenta.bold("add your task which you want to save it!"))
        }]);
    toDolist.push(addTask.Task);
    console.log(`your task added successfully! ${addTask.Task} `);
    let addmoreTask = await inquirer.prompt([{
            name: "addTask",
            type: "confirm",
            message: (chalk.cyan.underline("you want to save more task???!")),
            default: "False"
        }]);
    condition = addmoreTask.addTask;
}
console.log(chalk.yellow("your to-do list is ready to appear!"));
console.log(toDolist);
