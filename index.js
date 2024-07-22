// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type:'input',
        message: 'What is your Name?',
        name: 'yourname',
        default: 'Preksha',
    },    
    {
        type:'input',
        message: 'What is your GitHub username?',
        name: 'creator',
        default: 'Preksha2408',
    },    
    {
        type:'input',
        message: 'What is your email address?',
        name: 'email',
        default: 'prek.ps37@gmail.com',
    },
    {
        type: 'input',
        message: 'What is your Project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project?',
        name: 'description',
    },
    {
        type: 'list',
        message: colors.bgMagenta('What kind of license should your project have?'),
        name: 'license',
        choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None'],

    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'require',
        default: 'npm i',
    },
    {
        type: 'test-instructions',
        message: 'What command should be run to run tests?',
        name: 'test',
        default: 'npm test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'features',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributors',
    }, 
  ];

  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

  function init() {

    inquirer.prompt(questions).then((responses) => {
        console.log("Generating README.md File ...");
        writeToFile("./dist/README.md", generateMarkdown({...responses }));
    });
  }
  init();



