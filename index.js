// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a description.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation steps?",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions for usage.",
    name: "usage",
  },
  {
    type: "input",
    message: "List your collaborators.",
    name: "credits",
  },
  {
    type: "list",
    message: "Choose your license.",
    name: "license",
    choices: [
      "apache",
      "mit",
      "mpl",
      "unlicense",
      "bsl",
      "No License",
    ],
    },
    {
        type: 'input', 
        name: "Tests",
        message: "List test instructions"
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your Email Address",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("File created succesfully");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => { 
            const pageContent = generateMarkdown(response); 

            fs.writeFile('README.md', pageContent, (err) => err ? console.log(err) : console.log('File created successfully'))
         });
}

// Function call to initialize app
init();
