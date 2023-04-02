const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require("./lib/generateSVG");
const shapes = require('./lib/shapes');
const shapestest = requrie('./lib/shapes.test');


const questions  = [ {
    message: 'Enter up to 3 text characters for your logo',
    name: 'text'
},
{
    message: 'Enter a color for your logo text',
    name: 'txtcolor'
},
{
    type: 'list',
    message: 'Please choose a shape for your logo background',
    name: 'shape',
    choices: ['Square', 'Triangle', 'Circle']
},
{
    message: 'Enter a color for your background shape',
    name: 'shpcolor'
}
];



function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("Your logo has been created successfully")};
        }
    );
}

function init() {
    inquirer.prompt(questions).then((data) =>
       writeToFile('./examples/logo.svg', generateSVG(data)));
      
}

init();