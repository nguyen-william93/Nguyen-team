const inquirer = require("inquirer");
const pageTemplate = require("./src/page-template");
const writeFile = require("./src/generated-site");

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
        message: "Would you like to add another team member?",
        default: false
    },
];

const promptManager = () => {
    return inquirer.prompt(question)
};

const promptTeam = teamData => {
    if (!teamData.team){
        teamData.team = []
    }

    console.log (`
    ===================
    ADD NEW TEAM MEMBER
    ===================
    `)

    return inquirer.prompt({

    })
};

promptManager()
    .then (promptTeam)
    .then (teamData => {
        return pageTemplate(teamData);
    })
    .then (pageHTML  => {
        return writeFile(pageHTML);
    })
    .then (writeFileReponse => {
        console.log(writeFileReponse);
    })
    .catch(err =>{
        console.log(err)
    });