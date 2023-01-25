// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents   
  - [Description](#description) 
  - [Installation](#installation) 
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Contact](#contact)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credit}

  ## License
  ${data.license}

  ## Contributing
  ${data.contribution}

  ## Contact 
  ${data.username}

  ${data.email}

`;
}

module.exports = generateMarkdown;
