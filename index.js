const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What would you like your README title to be?"
    },
    {

    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    console.log("Welcome to the README generator!\n");
}

// function call to initialize program
init();