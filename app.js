const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
//const path = require("path");
const fs = require('fs');
//const OUTPUT_DIR = path.resolve(__dirname, "output")
//const outputPath = path.join(OUTPUT_DIR, "team.html");​
//const render = require("./lib/htmlRenderer");​

var validator = require("email-validator");


const manager = [];
const engineer = [];
const intern = [];

const questions = [{
        type: "input",
        name: "name",
        message: "Please enter full name",
        default: "John Doe",
        validate: validName = function(name){
            if (name === '') {
                return "Blank is not a name. Please try again";
            }
            return true;
        } 
    },

    {
        type: "input",
        name: "id",
        default: "00921D",
        message: "Please enter 6 digit ID number",
        validate: validID = function(id){
            if(id.length == 6){
                return true
            }
                return "incorrect character length"
        }
    },

    {
        type: "input",
        name: "email",
        message: "please enter email address",
        default: "hello@cligenerator.com",
        validate: validateEmail = function(email) {
            if(validator.validate(email) === false){
                return "not a valid email"
            }
            return validator.validate(email);
        }
    },
    {
        type: "rawlist",
        name: "role",
        message: "Please select your job position",
        default: "Engineer",
        choices: ["Manager", "Engineer", "Intern"],
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter your 4 digit OfficeNumber",
        default: "1D88",
        when: (answers) => answers.role === "Manager",
        validate: validOffice = function(officeNumber){
            if(officeNumber.length == 4){
                return true
            }
            return "incorrect character length"
        },
        
    },

    {
        type: "input",
        name: "github",
        message: "Please enter your Github username",
        default: "GitHubDefault",
        when: (answers) => answers.role === "Engineer",
        validate: validatGithub = (github) => github !== ''
        
    },
    {
        type: "input",
        name: "school",
        message: "Please enter your school of graduation",
        default: "University of Western Australia",
        when: (answers) => answers.role === "Intern",
        validate: validateSchool = (school) => school !== ''
        
    },

];

getAnswers = () => inquirer.prompt(questions)
    .then(data => {

        if (data.role == "Manager") {
            const resultManager = new Manager(data.name, data.id, data.email, data.officeNumber, data.role);
            console.log((resultManager))
            manager.push(data);
        } 
        
        if (data.role === "Engineer") {
            const resultEngineer = new Engineer(data.name, data.id, data.email, data.github, data.role);
            console.log(resultEngineer)
            engineer.push(data); 
        } 

        if (data.role === "Intern") {
            const resultIntern = new Intern(data.name, data.id, data.email, data.school, data.role);
            console.log(resultIntern);
            intern.push(data); 
        }

    })  .catch(error => {
        if (error.isTtyError) {
            // Prompts can't be rendered in the current environment
        } else {
            console.error(error)
        }

    })

    .then((data) => {
        inquirer.prompt({
            type: 'confirm',
            name: 'confirmed',
            message: 'Do you want to add another team member?',
            default: false
    })
    
    .then((reply) => {
        if (reply.confirmed) {
            return getAnswers(data)
        } else {
            var team = manager.concat(engineer, intern);
            console.log(team)
        }
    })
    
    .catch(error => {
        if (error.isTtyError) {
            // Prompts can't be rendered in the current environment
        } else {
            console.error(error)
        }

    })
});

getAnswers()




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
