// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'No License') {
    return `![](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else {
    return '';
  }
  
}
// console.log(renderLicenseBadge("Apache2.0"))

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let editedLicense = license;
  switch (license) {
    case 'apache':
      editedLicense += '-2.0';
      break;
    case 'mpl':
      editedLicense += '-2.0';
      break;
    case 'bsl':
      editedLicense += '-1.0';
      break;
  }

  if (license !== "No License") {
    return `https://choosealicense.com/licenses/${editedLicense}/`;
  } else {
    return '';
  }
}

// console.log(renderLicenseLink('unlicense'))

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No License") {
    return `This project is licensed under the ${license} license.
  `
  }
}
// console.log(renderLicenseSection('apache-2.0'))

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Credits](#credits)
  [Tests](#tests)
  [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Credits
  ${data.credits}

  ## Tests
  
  ## Questions
  Please reach me via email for further questions.
  ${data.github}
  ${data.email}




`;
}

module.exports = generateMarkdown;
