const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide the steps that are required for installation",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide any instructions that are necessary for usage",
  },
  {
    type: "input",
    name: "credit",
    message:
      "Please list any collaborators, tutorials or third party assets used in the project",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license for your project",
    choices: ["MIT", "Apache 2.0", "GNU GPLv3"],
  },
  {
    type: "input",
    name: "contribution",
    message: "Please provide any guidelines for contribution to this project",
  },
  {
    type: "input",
    name: "username",
    message: "Please provide your GitHub username",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your GitHub email address",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("README.md has been generated");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    return writeToFile("README.md", generateMarkdown(data));
  });
}

// function call to initialize program
init();
