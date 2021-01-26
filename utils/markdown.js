//markdown function
function generateMarkdown(data, githubInfo) {
    return `
        # **${data.title}**

        ${data.svg}

        ## Description 

        ${data.description}

        ## Table of contents
        - [Description](#Description)
        - [Installation](#Installation)
        - [Usage](#Usage)
        - [Licence](#Licence)
        - [Contributors](#Contributors)
        - [Test](#Test)
        - [Repository Link](#Repository)
        - [GitHub Info](#GitHub) 
        ## Installation

        ${data.installation}

        ## Usage

        ${data.usage}

        ## Licence

        ${data.svg}

        ## Contributors

        ${data.contributing}

        ## Test

        ${data.test}

        ## Repository

        - [Project Repo](${data.repo})

        ## GitHub

        ![Image of me](${githubInfo.githubImage})
        - ${githubInfo.name}
        - [GitHub Profile](${githubInfo.profile})
        - <${githubInfo.email}>
    `;
}
  
module.exports = generateMarkdown;