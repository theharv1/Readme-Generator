const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./utils/markdown');
const { makeBadge, ValidationError } = require('badge-maker');
//Readme question
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions for your project."
    },
    {
        type: "input",
        name: "usage",
        message: "How will your project be used?"
    },
    {
        type: "input",
        name: "licence",
        message: "Which license do you want for your project?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the names of those who contributed to your project."
    },
    {
        type: "input",
        name: "test",
        message: "Please provide test names for your project."
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your GitHub repo URL?"
    },
];
// inquirer call
inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function(res) {
            
            const githubInfo = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            };
            
            const format = {
                label: 'license',
                message: String(data.license),
                color: 'informational',
            };
              
            data.svg = makeBadge(format);
            
            fs.writeFile("output/README.md", generate(data, githubInfo), function(err) {
                if (err) {
                    console.log(err);
                    throw err;
                };
                console.log("Your new README file was created successfully.");
            });
        });
    });

function init() { }

init();