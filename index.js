const inquirer = require("inquirer");
const template = require("./src/page-template.js");
const writeFile = require("./src/generated-site");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


//set of question for each role
const roleQuestion = [
    {
        type: "checkbox",
        name: "role",
        message: "Which role would you like to add?",
        choices: ["Engineer", "Intern"]
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

const internQuestion = [
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
    //prompt user --> determine the role --> create an objet base on that role --> save that object into the array 

    if (employeeArr.length === 0) {
        return inquirer.prompt(managerQuestion)
            .then(data => {
                data.name = new Manager(data.name, data.id, data.email, data.office_number);
                employeeArr.push(data.name);
                return promptUser(employeeArr);
            })
    } else {
        return inquirer.prompt(roleQuestion)
            .then(response => {
                //checking the role
                //base on the role then the program will prompt the correct set of question and create a corresponding object
                console.log(response);
                switch (response.role.toString()) { 
                    case "Engineer":
                        return inquirer.prompt(engineerQuestion)
                            .then(data => {
                                data.name = new Engineer(data.name, data.id, data.email, data.github)
                                employeeArr.push(data.name);
                                if (data.confirmAddMember) {
                                    return promptUser(employeeArr);
                                } else {
                                    return employeeArr;
                                }
                            });
                        break;
                    case "Intern":
                        return inquirer.prompt(internQuestion)
                            .then(data => {
                                data.name = new Intern(data.name, data.id, data.email, data.school);
                                employeeArr.push(data.name);
                                if (data.confirmAddMember) {
                                    return promptUser(employeeArr);
                                } else {
                                    return employeeArr;
                                }
                            });
                        break;
                    }
                })
            .then(teamData => {
                return template(teamData); //creating a template base on the employeeArr data
            })
            .then (htmlPage => {
                return writeFile(htmlPage); //write the template to a file
            })
            .catch(err => {
                console.log(err);
            })
    }
}

//intialize the function and start the prompt
function init() {
    const employeeArr = [];
    promptUser(employeeArr);
}

init();
