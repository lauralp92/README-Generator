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
  - [Questions](#Questions)

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

  ## Questions 
  ${data.username} is my GitHub username.

  Feel free to contact me with any questions at ${data.email}

`;
}

module.exports = generateMarkdown;
