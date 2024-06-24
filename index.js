#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.magentaBright("\n\t========> WELCOME TO NAILA SOLANKI'S - CLI OOP(OBJECT ORIENTED PROGRAMMING PROJECT) <========\n"));
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log(chalk.bold.greenBright("Welcome Students!\n"));
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: (chalk.bold.blueBright("Whom Would You Like To Interact With?")),
            choices: ["Staff", "Student", "Exit"],
        });
        if (ans.select == "Staff") {
            console.log(chalk.bold.yellowBright("\nYou Approach The Staff Room."));
            console.log(chalk.bold.yellowBright("Please Feel Free To Ask Any Question."));
        }
        else if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: (chalk.bold.blue("Enter The Student's Name You Wish To Engage With:")),
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.bold.red(`Hello I Am ${name.name}. `));
                console.log(chalk.bold.red("Nice To meet You!"));
                console.log(chalk.bold.yellow("New Student Added."));
                console.log(chalk.bold.magenta("Current Student List:"));
                console.log(persons.students);
            }
            else {
                console.log(chalk.bold.greenBright(`Hello I Am ${student.name}. `));
                console.log(chalk.bold.greenBright("Nice To See You Again!"));
                console.log(chalk.bold.magentaBright("Existing Student List:"));
                console.log(persons.students);
            }
        }
        else if (ans.select == "Exit") {
            console.log(chalk.bold.italic.redBright("\n\t******* Existing The Program... *******\n"));
            process.exit();
        }
    } while (true);
};
programStart(persons);
