const inquirer = require("inquirer");
const pageTemplate = require("./src/page-template");
const writeFile = require("./src/generated-site");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//set of question for each role
const roleQuestion = [
    {
        type: "checkbox",
        name: "type",
        message: "Which role would you like to add?",
        choices: ["Manager", "Engineer", "Intern"]
    },
]

const managerQuestion = [
    {
        type: "text",
        name: "name",
        message: "Enter the manager name: "
    },
    {
        type: "number",
        name: "id",
        message: "Enter your ID: ",
    },
    {
        type: "string",
        name: "email",
        message: "Enter your email: "
    },
    {
        type: "number",
        name: "office_number",
        message: "Enter your office number: "
    },
    {
        type: "confirm",
        name: "confirmAddMember",
        message: "Would you like to add a team member?",
        default: false
    }
];

const engineerQuestion = [
    {
        type: 'text',
        name: "name",
        message: "Enter the engineer name: "
    },
    {
        type: "number",
        name: "id",
        message: "Enter the engineer ID: "
    },
    {
        type: "string",
        name: 'email',
        message: 'Enter the engineer email: '
    },
    {
        type: "string",
        name: "github",
        message: "Enter the engineer github: "
    },
    {
        type: "confirm",
        name: "confirmAddMember",
        message: "Would you like to add a team member?",
        default: false
    },
];

const internPrompt = [
    {
        type: "text",
        name: "name",
        message: "Enter the intern name: "
    },
    {
        type: "number",
        name: "id",
        message: "Enter the intern ID: "
    },
    {
        type: "string",
        name: "email",
        message: "Enter the intern email: "
    },
    {
        type: "string",
        name: "school",
        message: "Enter the intern's school"
    },
    {
        type: "confirm",
        name: "confirmAddMember",
        message: "Would you like to add a team member?",
        default: false
    }
]


const promptUser = employeeArr => {
    //if the array is zero then we will prompt for the manager position first
    //if the array is not zero then we will prompt for the role.
    //construct an object base on the role with the information being pass in
    //if confirm add more member is true then we will keep it going in a loop
    //if confirm add more member is false then we will just call on the page template function then call the generate site function to write up the index.html file

    if (employeeArr.length === 0) {
        return inquirer.prompt(managerQuestion)
            .then(data => {
                data.name = new Manager(data.name, data.id, data.email, data.office_number);
                employeeArr.push(data.name);
                promptUser(employeeArr);
            })
    } else {
        return inquirer.prompt(roleQuestion)
            .then(role => {
                return inquirer.prompt(engineerQuestion);
            })
            .then(response => {
                console.log(response);
                if (response.confirmAddMember){
                    promptUser(employeeArr);
                } else {
                    const indexHTML = pageTemplate(employeeArr);
                    writeFile("./dist/index.html")
                }
            });
    }
}

function init() {
    const employeeArr = [];
    promptUser(employeeArr);
}

init();