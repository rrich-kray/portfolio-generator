// Be consistent and don't mix ES5 with ES6 syntax

const inquirer = require('inquirer');
console.log(inquirer)

// const fs = require('fs')
// const generatePage = require('./src/page-template.js')

// const pageHTML = generatePage(name, github)

// // const [name, github] = profileDataArgs;

// fs.writeFile('./index.html', pageHTML,  err => {
//     if (err) throw err;
//     console.log('Saved!');
// })

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers))