// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
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
        name: 'contributing',
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
        choices: ['MIT', 'Apache 2.0', 'BSD 3', 'Mozilla 2.0', 'Eclipse 2.0', 'GPL 3.0', 'None']
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
function writeToFile() {
    inquirer.prompt(questions)

    .then((answers) => {
        fs.writeFile('READMEtemplate.md', generateMarkdown(answers), (err) =>
            err ? console.log(err) : console.log('Successfully created README!')
        );
    });
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
