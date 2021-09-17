// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

const generateMarkdown = require('./utils/generateMarkdown')


const manager = require('./lib/manager');
// const engineer = require('');
// const intern = require('');

employeePrompts();

function employeePrompts() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter name of manager',
                name: 'name'
            },
            {
                type: 'input',
                message: 'input title',
                name: 'title'
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
                message: 'enter office number',
                name: 'office'
            },
            {
                type: 'input',
                message: 'Enter name of Intern',
                name: 'name1'
            },
            {
                type: 'input',
                message: 'enter title',
                name: 'title1'
            },
            {
                type: 'input',
                message: 'input ID',
                name: 'id1'
            },
            {
                type: 'input',
                message: 'input email',
                name: 'email1'
            },
            {
                type: 'input',
                message: 'School',
                name: 'school'
            },
            {
                type: 'input',
                message: 'Enter name of engineer',
                name: 'name2'
            },
            {
                type: 'input',
                message: 'enter title',
                name: 'title2'
            },
            {
                type: 'input',
                message: 'input ID',
                name: 'id2'
            },
            {
                type: 'input',
                message: 'input email',
                name: 'email2'
            },
            {
                type: 'input',
                message: 'enter github',
                name: 'github'
            },
        ]).then(answers => {
            let something = generateMarkdown(answers)
            fs.writeFile('test.html', something,
                (err) => {
                    if (err) throw err;
                })
        }
        );
}


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