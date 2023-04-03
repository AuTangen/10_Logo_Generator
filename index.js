const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes')





const questions  = [ {
    message: 'Enter up to 3 text characters for your logo',
    name: 'text'
},
{
    message: 'Enter a color for your logo text',
    name: 'textcolor'
},
{
    type: 'list',
    message: 'Please choose a shape for your logo background',
    name: 'shape',
    choices: ['Square', 'Triangle', 'Circle']
},
{
    message: 'Enter a color for your background shape',
    name: 'shapecolor'
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
    inquirer.prompt(questions).then((data) => {
        const userLogo = new Shape(data.text, data.textcolor, data.shape, data.shapecolor);
       writeToFile('./examples/logo.svg', userLogo.render())
    });
      
}

init();