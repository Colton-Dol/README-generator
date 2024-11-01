// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a short description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter instructions to install your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide information on how to use your project.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide guidelines for others who want to contribute.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions on how to test your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project',
        choices: []
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
