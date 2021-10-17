const Employee = require("../lib/Employee");

const managerCard = manangerObj => {
    return `
    <div class = "container">
        <div class = "card">
            <div class = "card-header">
                <h1> ${manangerObj.getName()} </h1>
                <h2> ${manangerObj.getRole()}</h2>
            </div>
            <div class = "card-body>
                <ul>
                    <li> ID: ${manangerObj.getId()} </li>
                    <li> Email: ${manangerObj.getEmail()}</li>
                    <li> Office Number: ${manangerObj.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    </div>
    `
};

const engineerCard = engineerObj => {
    return `
    <div class = "container">
        <div class = "card">
            <div class = "card-header">
                <h1> ${engineerObj.getName()} </h1>
                <h2> ${engineerObj.getRole()}</h2>
            </div>
            <div class = "card-body>
                <ul>
                    <li> ID: ${engineerObj.getId()} </li>
                    <li> Email: ${engineerObj.getEmail()}</li>
                    <li> Github: ${engineerObj.getGitHub()}</li>
                </ul>
            </div>
        </div>
    </div>
    `
};

const internCard = internObj => {
    return `
    <div class = "container">
        <div class = "card">
            <div class = "card-header">
                <h1> ${internObj.getName()} </h1>
                <h2> ${internObj.getRole()}</h2>
            </div>
            <div class = "card-body>
                <ul>
                    <li> ID: ${internObj.getId()} </li>
                    <li> Email: ${internObj.getEmai()}</li>
                    <li> School: ${internObj.getSchool()}</li>
                </ul>
            </div>
        </div>
    </div>
    `
};

const generateCardSection = employeeObj => {
    return employeeObj.forEach( employee => {
        switch (employee.getRole()){
            case "Manager":
                return managerCard(employee);
            case "Engineer":
                return engineerCard(employee);
            case "Intern":
                return internCard(employee);
        }
    })
};

const pageTemplate = templateData => {
    console.log(templateData);
    return `
    <!DOCTYPE html>
    <html>

        <head>
            <title>Page</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        </head>
        <body>
            <header class = "containter>
                <div class = "row">
                    <h1> My Team </h1>
                </div>
            </header>
            <main class = "container">
                ${generateCardSection(templateData)}
            </main>
        </body>
    </html>
    `
};

module.exports = pageTemplate;



// when to use type of loop
// functional programming: does not want you to change the original data = map or filter function.
// as long as it make sense to you as the coder.
