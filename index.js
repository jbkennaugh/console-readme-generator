const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What would you like your README title to be?",
        default: "README Title"
    },
    {
        type: "input",
        name: "description",
        message: "Please give a brief description of your project:",
        default: "None given."
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter any installation instructions:",
        default: "No installation required."
    },
    {
        type: "input",
        name: "usage",
        message: "Enter any necessary usage information:",
        default: "No extra information necessary."
    },
    {
        type: "input",
        name: "contributing",
        message: "Describe how would you like any potential contributors to do so:",
        default: "See below 'questions' section."
    },
    {
        type: "input",
        name: "tests",
        message: "Please give instructions for testing:",
        default: "None given."
    },
    {
        type: "list",
        name: "licence",
        message: "Which licence does your project use?",
        choices: ["MIT", "Apache License 2.0", "GNU General Public License v3.0", "None"],
        default: "None selected."
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?",
        default: "No username given."
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        default: "No email address given."
    },
    {
        type: "input",
        name: "filename",
        message: "What would you like your README file to be called?",
        default: "README"
    }
];

// function to write README file
function writeToFile(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), generateMarkdown(data))
}

// function to initialize program
function init() {
    console.log("Welcome to the README generator!\n");
    inquirer.prompt(questions).then((answers) => {
        let filename = `./generated-READMEs/${answers.filename}.md`

        console.log("Generating README file...");
        writeToFile(filename, answers);
        console.log("Readme file created!");
    });
}

// function call to initialize program
init();