// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

const generateMarkdown = require('./utils/generateMarkdown')

// const employee = require('');
// const manager = require('');
// const engineer = require('');
// const intern = require('');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter name of manager',
            name: 'name'
        },
        {
            type: 'input',
            message: 'input ID',
            name: 'id'
        },
        {
            type: 'input',
            message: 'input email',
            name: 'email'
        },
        {
            type: 'input',
            message:'enter office number',
            name: 'office'
        },
    ]).then(answers => {
        let something = generateMarkdown(answers)
        fs.writeFile('test.html', something,
            (err) => {
                if (err) throw err;
            })
    }
    );

    // const genHtml =(html) => {
    //     fs.writeFile('test.html', html, (err) => {
    //         if (err) console.log(err);
    //         console.log('Sucess');
    //     })
    // }

    

//     inquirer
//     .prompt([
//     {
//         type: 'input',
//         message:'github',
//         name: 'github'
//     },
// ]);



//     inquirer
//     .prompt([
//     {
//         type: 'input',
//         message:'school',
//         name: ' school'
//     },
// ]);